def foodTruckEntity(foodTruck) -> dict:
    return {
        "food_truck_id": str(foodTruck["_id"]),
        "food_truck_name": foodTruck["food_truck_name"],
        "food_truck_available_date": foodTruck["food_truck_available_date"]
    }

def foodTrucksEntity(foodTrucks) -> list:
    return [foodTruckEntity(foodTruck) for foodTruck in foodTrucks]