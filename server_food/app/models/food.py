"""
Holds the model class for request and response for Users sample routes
"""

from dataclasses import dataclass
from typing import Optional

from pydantic import BaseModel, Field


class FoodItems(BaseModel):
    food_item_id: int = Field(
        None, title="Food item id", description="Unique id assigned to food item"
    )
    food_item_name: str = Field(
        None,
        title="Food item name",
        description="Name of the food item, eg. Dal, Chapati etc.",
        max_length=50,
    )
    food_item_category: str = Field(
        None,
        title="Food item category",
        description="Category of the food item, eg. Soup, Salad etc.",
        max_length=30,
    )
    food_item_price: int = Field(
        None,
        title="Food item price",
        description="Price of the food item assigned by food truck",
    )


@dataclass
class FoodModel(BaseModel):
    """
    Food model
    """

    food_truck_id: int = Field(
        None, title="Food truck id", description="Unique id assigned to food truck"
    )
    food_truck_name: str = Field(
        None,
        title="Food truck name",
        description="Name of the food truck",
        max_length=50,
    )
    food_truck_menu: FoodItems
    food_truck_available_date: list = Field(
        None,
        title="Food truck available dates",
        description="List of date when the food truck is available for food service",
    )
