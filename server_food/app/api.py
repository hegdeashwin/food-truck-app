"""
Holds all API routes hosted by the service
"""

from fastapi import APIRouter

from app.endpoints import health, info, food

api_router = APIRouter()

# Special routes which all the microservice should have and should not be removed or disturbed
api_router.include_router(info.router)
api_router.include_router(health.router)
