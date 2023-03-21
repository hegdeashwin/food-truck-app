"""
Holds all common handler functions used within services
"""
import os
import logging
from functools import lru_cache

from omegaconf import OmegaConf
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from app.metadata import Metadata

logging.config.fileConfig('logging.conf', disable_existing_loggers=False)
logger = logging.getLogger(__name__)

@lru_cache()
def get_service_metadata():
    """
    Return Configs class which holds application's metadata info
    @lru_cache() Decorates to return the same value that was returned the first time,
    instead of computing it again, executing the code of the function every time.
    """
    return Metadata()


@lru_cache()
def load_config():
    """
    Return system instance type where the service is running, either dev/stage/production env,
    depends on system variable API_SYS_INS_TYPE configured
    """
    sys_ins_type = str(os.getenv("API_SYS_INS_TYPE"))
    file = OmegaConf.load("app/configs/development.yml")

    if sys_ins_type in "PRODUCTION":
        file = OmegaConf.load("app/configs/production.yml")

    if sys_ins_type in "STAGE":
        file = OmegaConf.load("app/configs/stage.yml")

    return file

@lru_cache()
def connect_mongodb():
    CONFIG = load_config()
    MONGO_ENDPOINT = CONFIG.DOWNSTREAMS.DB.MONGO
    
    try:
        client = MongoClient(f"{MONGO_ENDPOINT}", server_api=ServerApi("1"), serverSelectionTimeoutMS=5000)
        logger.info(client.server_info())
        return client
    except Exception:
        logger.error("Unable to connect to the server.")
