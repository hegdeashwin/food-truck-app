import { Formik } from 'formik'
import { useState } from 'react'

import constants from '../constants'

type Errors = {
  foodTruckName: string
  foodTruckAvailableDate: string
}

type AddFoodTruckProps = {
  onRefresh: Function
}

export default function AddFoodTruck(props: AddFoodTruckProps) {
  const { onRefresh } = props

  const defaultApiRequestObj = {
    foodTruckName: '',
    foodTruckAvailableDate: '',
  }

  const defaultApiResponseObj = {
    content: '',
    status: 0,
  }

  const [apiResponse, setApiResponse] = useState(defaultApiResponseObj)

  const validate = (values: any): Errors => {
    const errors: Errors = defaultApiRequestObj

    if (values && !values.foodTruckName) {
      errors.foodTruckName = 'Please choose a food truck name.'
    }

    if (!values.foodTruckAvailableDate) {
      errors.foodTruckAvailableDate = 'Please select a valid date.'
    }

    return errors
  }

  const handleSubmit = async (
    values: any,
    setSubmitting: Function,
    resetForm: Function
  ) => {
    setSubmitting(false)

    const response = await fetch(
      `${constants.DOWNSTREAM_ENDPOINT}/foodtrucks`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    )

    setApiResponse({
      content: await response.json(),
      status: response.status,
    })

    onRefresh()

    setTimeout(() => {
      setApiResponse(defaultApiResponseObj)
      resetForm()
    }, 3000)
  }

  return (
    <Formik
      initialValues={defaultApiRequestObj}
      validate={(values) => validate(values)}
      onSubmit={(values, { setSubmitting, resetForm }) =>
        handleSubmit(values, setSubmitting, resetForm)
      }
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add new food truck</h5>
            <hr className="div" />
            {apiResponse && apiResponse.status === 200 && (
              <div
                className="alert alert-success alert-dismissible"
                role="alert"
              >
                Added new food truck successfully.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="row g-3 needs-validation">
              <div className="col-md-6">
                <label htmlFor="foodTruckName" className="form-label">
                  Enter food truck name
                </label>
                <input
                  type="text"
                  name="foodTruckName"
                  className="form-control mb-2"
                  id="foodTruckName"
                  placeholder="eg. Meals on Wheels"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.foodTruckName}
                />
                {errors.foodTruckName && (
                  <div
                    className="alert alert-danger d-flex align-items-center p-2"
                    role="alert"
                  >
                    {errors.foodTruckName &&
                      touched.foodTruckName &&
                      errors.foodTruckName}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="foodTruckAvailableDate" className="form-label">
                  Choose food truck available date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  placeholder="dd/mm/yyyy"
                  name="foodTruckAvailableDate"
                  className="form-control mb-2"
                  id="foodTruckAvailableDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.foodTruckAvailableDate}
                />
                {errors.foodTruckAvailableDate && (
                  <div
                    className="alert alert-danger d-flex align-items-center p-2"
                    role="alert"
                  >
                    {errors.foodTruckAvailableDate &&
                      touched.foodTruckAvailableDate &&
                      errors.foodTruckAvailableDate}
                  </div>
                )}
              </div>

              <div className="col-md-2 py-2">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success mt-4"
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  )
}
