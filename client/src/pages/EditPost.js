import React from 'react';
import { useLocation } from 'react-router-dom';
import EditPostForm from '../components/EditPostForm';
const EditPost = () => {
    const location= useLocation()
    const {thoughtId} = location.state
    return <EditPostForm props={thoughtId}/>
}
export default EditPost;