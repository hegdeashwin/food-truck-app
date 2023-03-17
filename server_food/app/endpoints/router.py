"""
Holds all API routes hosted by the service
"""

from fastapi import APIRouter

from app.endpoints import health, info, users

api_router = APIRouter()

# Special routes which all the microservice should have and should not be removed or disturbed
api_router.include_router(info.router, tags=["info"])
api_router.include_router(health.router, tags=["health"])
