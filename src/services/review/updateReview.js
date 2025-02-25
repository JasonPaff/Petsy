﻿import {apiRoute} from "../../utils/apiRoute";
import {gql} from "@apollo/client";
import getGqlString from "../../utils/graphql_utils";

export default async function updateReviewed(updatedReview) {
    let query = gql`mutation Mutation($updatedReview: ReviewInput!) {
        updateReview(updatedReview: $updatedReview) {
            success
            message
            review {
                dateReviewed
                review
                stars
                userIdReviewed
            }
        }
    }`
    query = getGqlString(query);

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({
            query,
            variables: {
                updatedReview
            }
        })
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    return await request.json();
};