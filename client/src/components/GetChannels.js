import React, {useEffect, useState} from "react";
import { useQuery, gql } from '@apollo/client';
import { QUERY_CHANNELS } from "../utils/queries";

function GetChannels() {

    const {error, loading, data} = useQuery(QUERY_CHANNELS);

    useEffect(() => {
        console.log(data);

    }, [data]);

    return <div></div>
};

export default GetChannels;