"""
Holds functions used by food Sample API
"""

import requests
from fastapi import APIRouter, status
from fastapi_versioning import version

from app.core import common_handlers
from app.models.food import FoodModel

router = APIRouter(
    prefix="/food_truck",
    tags=["Food Truck"],
    responses={404: {"description": "Not found"}},
)

CONFIG = common_handlers.load_config()
BASE_URL = CONFIG.DOWNSTREAMS.JSON_PLACE_HOLDER


@router.get("/", status_code=status.HTTP_200_OK)
@version(1)
async def get_food_trucks():
    """
    Return sample response
    """
    response = requests.get(f"{BASE_URL}/users", timeout=10)
    if response.status_code == status.HTTP_200_OK:
        return response.json()
    return None


@router.get("/{food_truck_id}", status_code=status.HTTP_200_OK)
@version(1)
async def get_food_truck_by_id(food_truck_id: int):
    """
    Return sample response
    """
    response = requests.get(f"{BASE_URL}/user/{food_truck_id}", timeout=10)
    if response.status_code == status.HTTP_200_OK:
        return response.json()
    return None


@router.post("/", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food: FoodModel):
    """
    Return food response
    """
    return {
        "food_id": food.food_id,
        "food_name": food.first_name,
    }


@router.put("/", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food: FoodModel):
    """
    Return food response
    """
    return {
        "food_id": food.food_id,
        "food_name": food.first_name,
    }


@router.delete("/", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food: FoodModel):
    """
    Return food response
    """
    return {
        "food_id": food.food_id,
        "food_name": food.first_name,
    }


@router.get("/{food_truck_id}/menu", status_code=status.HTTP_200_OK)
@version(1)
async def get_food_truck_menu(food_truck_id: int):
    """
    Return list of all food items available in menu by food truck
    """
    response = requests.get(f"{BASE_URL}/user/{food_truck_id}", timeout=10)
    if response.status_code == status.HTTP_200_OK:
        return response.json()
    return None


@router.post("/{food_truck_id}/item", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food: FoodModel):
    """
    Return food response
    """
    return {
        "food_id": food.food_id,
        "food_name": food.first_name,
    }


@router.put("/{food_truck_id}/item", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food: FoodModel):
    """
    Return food response
    """
    return {
        "food_id": food.food_id,
        "food_name": food.first_name,
    }


@router.delete("/{food_truck_id}/item", status_code=status.HTTP_200_OK)
@version(1)
async def onboard_food_truck(food: FoodModel):
    """
    Return food response
    """
    return {
        "food_id": food.food_id,
        "food_name": food.first_name,
    }
