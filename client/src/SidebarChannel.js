import React, {useEffect, useState} from "react";
import { useQuery, gql } from '@apollo/client';
import { QUERY_CHANNELS } from "../src/utils/queries";
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'
import './SidebarChannel.css'

const SidebarChannel = ({ id, channelName }) => {
    const dispatch = useDispatch()

    const {error, loading, data} = useQuery(QUERY_CHANNELS);

    useEffect(() => {
        console.log(data);

    }, [data]);

    return (
        <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))} >
            <h4><span className='sidebarChannel__hash'>#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
