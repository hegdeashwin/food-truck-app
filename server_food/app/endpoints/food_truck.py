"""
Holds functions used by food Sample API
"""
from bson import ObjectId
from fastapi import APIRouter, status
from fastapi_versioning import version

from app.core import common_handlers
from app.models.food_truck import FoodTruckModel
from app.schema.food_truck_entity import foodTrucksEntity, foodTruckEntity


router = APIRouter(
    prefix="/food_trucks",
    tags=["food trucks"],
    responses={404: {"description": "Not found"}},
)

CONFIG = common_handlers.load_config()
BASE_URL = CONFIG.DOWNSTREAMS.JSON_PLACE_HOLDER

client = common_handlers.connect_mongodb()

@router.get("/", status_code=status.HTTP_200_OK)
@version(1)
async def get_food_trucks():
    """
    Return list of available food trucks on given date.
    Defaults to current date.
    """
    return foodTrucksEntity(client.ftaas_db.food_trucks.find())


@router.get("/{food_truck_id}", status_code=status.HTTP_200_OK)
@version(1)
async def get_food_truck_by_id(food_truck_id: str):
    """
    Return single food truck by food_truck_id
    """
    return foodTruckEntity(client.ftaas_db.food_trucks.find_one({"_id": ObjectId(food_truck_id)}))


@router.post("/", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(foodTruck: FoodTruckModel):
    """
    Return food response
    """
    client.ftaas_db.food_trucks.insert_one(dict(foodTruck))
    return foodTruck


@router.put("/", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food_truck_id, food_truck_name: FoodTruckModel):
    """
    Return food response
    """
    client.ftaas_db.food_trucks.find_one_and_update(
        {"_id": ObjectId(food_truck_id)},
        {"$set": dict(food_truck_name)}
    )
    return foodTruckEntity(client.ftaas_db.food_trucks.find_one({"_id": ObjectId(food_truck_id)}))


@router.delete("/{food_truck_id}", status_code=status.HTTP_200_OK)
@version(1)
async def remove_food_truck_by_id(food_truck_id: str):
    """
    Return food response
    """
    return foodTruckEntity(client.ftaas_db.food_trucks.find_one_and_delete({"_id": ObjectId(food_truck_id)}))
