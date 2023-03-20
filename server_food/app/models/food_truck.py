"""
Holds the model class for request and response for Users sample routes
"""

from pydantic import BaseModel, Field
from datetime import datetime

class FoodTruckModel(BaseModel):
    """
    Food model
    """

    food_truck_name: str = Field(
        None,
        title="Food truck name",
        description="Name of the food truck",
        max_length=50,
    )
    
    food_truck_available_date: datetime = None
