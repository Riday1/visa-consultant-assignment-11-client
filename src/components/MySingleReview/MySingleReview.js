import React from 'react';

const MySingleReview = ({ review, handleDelete }) => {
    const { text, name, user_email, service_title, service_id, img, _id } = review;

    const handleUpdate = () => {
        fetch(``)
    }


    return (
        <tr>
            <th>1</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>{text}</td>
            <td>{service_title}</td>
            <th>{service_id}</th>
            <td>{user_email}</td>
            <td className='flex '>
                <button onClick={() => handleUpdate()} className='btn btn-success text-white'>Update</button>
                <button onClick={() => handleDelete(_id)} className='btn btn-warning ml-6'>Delete</button>
            </td>
        </tr>
    );
};

export default MySingleReview;