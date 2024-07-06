



export async function myLoader(params) {
    const serviceFetch = fetch(`https://assignment-11-server-ashen.vercel.app/services/${params.id}`).then(res => res.json())
    const reviewsFetch = fetch(`https://assignment-11-server-ashen.vercel.app/reviews/${params.id}`).then(res => res.json())


    const [serviceData, reviews] = await Promise.all([serviceFetch, reviewsFetch])
    return { serviceData, reviews }

}