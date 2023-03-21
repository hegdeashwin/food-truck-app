import { useEffect, useState } from 'react'
import { Formik } from 'formik'

export default function ListFoodTruck(props: any) {
    const { refresh, onRefreshComplete } = props
    const [foodTruckData, setFoodTruckData] = useState(null)
    const [loader, setLoader] = useState(true)
    const { filterByCurrentDate } = props
    const [apiResponse, setApiResponse] = useState(null)
    const [localRefresh, setLocalRefresh] = useState(false)
    const [currentEditData, setCurrentEditData] = useState(null)

    const initialValues = {
        foodTruckName: '',
        foodTruckAvailableDate: '',
    }

    useEffect(() => {
        setLoader(true)
        fetch(`http://localhost:8005/api/v1/foodtrucks?filterByCurrentDate=${filterByCurrentDate}`)
            .then((res) => res.json())
            .then((data) => {
                setFoodTruckData(data)
                setLoader(false)
            }
        )

        if (refresh) {
            onRefreshComplete()
        }
        if (localRefresh) {
            setLocalRefresh(false)
        }
    }, [refresh, localRefresh])

    const onEditHandler = (evt: any, id: string, foodTruckName: string, foodTruckAvailableDate: string) => {
        setCurrentEditData({
            id: id,
            foodTruckName: foodTruckName,
            foodTruckAvailableDate: foodTruckAvailableDate
        })
    }

    const onDeleteHandler = async (evt: any, id: string) => {
        evt.preventDefault()
        
        const response = await fetch("http://localhost:8005/api/v1/foodtrucks", {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                foodTruckId: id
            })
        })

        setApiResponse({
            content: await response.json(),
            status: response.status
        })

        setLocalRefresh(true)
    }

    const handleSubmit = async (values, setSubmitting, resetForm) => {
        
        setSubmitting(false)
        
        Object.assign(values, {
            foodTruckId: currentEditData.id
        })

        const response = await fetch("http://localhost:8005/api/v1/foodtrucks", {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })
    
        setApiResponse({
          content: await response.json(),
          status: response.status
        })
    
        setLocalRefresh(false)
    
        setTimeout(() => {
          setApiResponse(null)
          resetForm()
        }, 2000)
    }

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"># Food truck id</th>
                    <th scope="col">Food truck name</th>
                    <th scope="col">Food truck available date</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {
                    loader ? (
                    <tr>
                        <td colSpan="4">
                        Loading ...
                        </td>
                    </tr>
                    ) : null
                }
                {
                    foodTruckData && foodTruckData.length === 0 ? (
                    <tr>
                        <td colSpan="4">
                        <div className="alert alert-success" role="alert">
                            <h5 className="alert-heading">Welcome!</h5>
                            <span>No records found! It looks like we don't have any food truck records added into the system. Here are few next possible steps(s) for you to follow.</span>
                            <hr />
                            <ol>
                            <li>Would you like to add new food truck using above form?</li>
                            <li>We love to build great products, please feel free to <a href="" target="_blank">share your feedback(s)</a> or <a href="" target="_blank">report bug(s)</a> to our products etc.</li>
                            </ol>
                        </div>
                        </td>
                    </tr>
                    ) : (
                    foodTruckData && foodTruckData.map((data: any) => (
                        <tr key={data._id}>
                        <td scope="row">{data._id}</td>
                        <td>{data.food_truck_name}</td>
                        <td>{data.food_truck_available_date}</td>
                        <td>
                            <button data-bs-toggle="modal" data-bs-target="#editModal" className="btn btn-sm btn-secondary" onClick={(evt) => onEditHandler(evt, data._id, data.food_truck_name, data.food_truck_available_date)}>Edit</button>
                            <button className="btn btn-sm btn-danger ms-1" onClick={(evt) => onDeleteHandler(evt, data._id)}>Delete</button>
                        </td>
                        </tr>
                    ))
                    )
                }
                </tbody>
            </table>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editModalLabel">Edit food truck</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={initialValues}
                            // validate={values => validate(values)}
                            onSubmit={(values, { setSubmitting, resetForm }) => handleSubmit(values, setSubmitting, resetForm)} >
                            {
                                ({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <>
                                        {
                                            apiResponse && apiResponse.status === 200 && (
                                            <div className="alert alert-success alert-dismissible" role="alert">
                                                Updated new food truck successfully.
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                            )
                                        }
                                        
                                        <form onSubmit={handleSubmit} className="row g-3 needs-validation">
                                            <div>
                                                <label htmlFor="foodTruckName" className="form-label">Enter food truck name</label>
                                                <input type="text" name="foodTruckName" className="form-control mb-2" id="foodTruckName" placeholder="eg. Meals on Wheels" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.foodTruckName} />
                                                {
                                                    errors.foodTruckName && (
                                                    <div className="alert alert-danger d-flex align-items-center p-2" role="alert">
                                                        {errors.foodTruckName && touched.foodTruckName && errors.foodTruckName}
                                                    </div>
                                                    )
                                                }
                                            </div>

                                            <div>
                                                <label htmlFor="foodTruckAvailableDate" className="form-label">Choose food truck available date</label>
                                                <input type="date" placeholder="dd/mm/yyyy" min={new Date().toISOString().split('T')[0]} name="foodTruckAvailableDate" className="form-control mb-2" id="foodTruckAvailableDate" placeholder="eg. Meals on Wheels" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.foodTruckAvailableDate} />
                                                {
                                                    errors.foodTruckAvailableDate && (
                                                    <div className="alert alert-danger d-flex align-items-center p-2" role="alert">
                                                        {errors.foodTruckAvailableDate && touched.foodTruckAvailableDate && errors.foodTruckAvailableDate}
                                                    </div>
                                                    )
                                                }
                                            </div>

                                            <div>
                                                <input type="submit" value="Update" className="btn btn-success" disabled={isSubmitting} />
                                                <input type="button" value="Cancel" className="btn btn-secondary ms-2" data-bs-dismiss="modal" />
                                            </div>
                                        </form>
                                    </>
                                )
                                
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
