import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { toast} from 'react-toastify';
import profile from '../../assets/images/Student-avatar.jpg'

const UpdateModul = ({setUpdateModal, refetch, updateModal}) => {

    
    const user = updateModal;
    const [image, setImage] = useState();
    const [img, setImg] = useState()
    const imageRef = useRef();
    const [name, setName] = useState(user?.name)
    const [address, setAddress] = useState(user?.address)
    const [bio, setBio] = useState(user?.bio? user.bio : "Enter Your bio data")
    
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImg(img)
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

    const imageStorageKey = '290c7a0f169eabc5cf1f1fe286564c38';

    const handleUpdate = async (e) => {
        e.preventDefault();
        const fromData = new FormData();
        fromData.append('image', img);
        console.log(img)
        
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                console.log('imgbb', result)
                const img = result.data?.url;

                const data = {
                    name: name,
                    address: address,
                    bio: bio,
                    image: img,
                }

                console.log(data)
                // send data backend
                fetch(`http://localhost:5000/UpdateUser/${user._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'                    
                    },
                    body: JSON.stringify(data)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount){
                            toast.success("Update Profile successfully");
                            setUpdateModal(null)
                            refetch();
                        }
                })
            }
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="add-update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleUpdate} className="modal-box p-2 sm:p-4">
                    <h1 className='text-xl font-bold text-cyan-900'>Update Profile</h1>
                    <div className="mt-3">
                        <div className="flex text-center justify-between items-center">
                            <div onClick={() => imageRef.current.click()} className="avatar cursor-pointer">
                                <div className="w-20 rounded-full ring bg-blue-200 ring-green-500 ring-offset-base-100 ring-offset-2">
                                    { !image && <img src={profile} alt='profile' />}
                                    { image && <img src={image.image} alt='profile' />}
                                </div>
                                <div style={{display: 'none'}} className="hidden">
                                    <input type="file" name="images" onChange={onImageChange} ref={imageRef} id="" />
                                </div>
                            </div>
                            <div className=" w-full ml-3">
                             <input type="text" name='name' onChange={(e) => setName(e.target.value) } value={name} placeholder={user?.name} className="input mb-3 input-bordered input-success input-sm  w-full" />
                             <input type="text" name='address' onChange={(e) => setAddress(e.target.value) } value={address} placeholder={user?.address} className="input input-success input-bordered input-sm  w-full" />
                            </div>
                        </div>
                        <div className="mt-4">
                             <textarea name='bio' value={bio} onChange={(e) => setBio(e.target.value) } className="textarea w-full textarea-success" placeholder="Bio data"></textarea>
                        </div>
                    </div>
                    <div className="modal-action mt-3">
                        <input type="submit" value="Save" className="btn btn-success text-white btn-xs" />
                        <label for="add-update-modal" className="btn btn-xs">cancel</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateModul;