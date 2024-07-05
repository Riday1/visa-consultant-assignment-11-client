



export async function myLoader(params) {
    const serviceFetch = fetch(`http://localhost:5000/services/${params.id}`).then(res => res.json())
    const reviewsFetch = fetch(`http://localhost:5000/reviews/${params.id}`).then(res => res.json())


    const [serviceData, reviews] = await Promise.all([serviceFetch, reviewsFetch])
    return { serviceData, reviews }

}