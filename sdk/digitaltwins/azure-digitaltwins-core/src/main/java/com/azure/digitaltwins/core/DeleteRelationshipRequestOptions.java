// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

package com.azure.digitaltwins.core;


import java.util.List;

/**
 * Optional settings that are specific to calls to {@link DigitalTwinsClient#updateComponent(String, String, List)} and its overloads.
 */
public class DeleteRelationshipRequestOptions extends RequestOptions {
    // This class exists to be added to later if the deleteRelationship APIs get a new optional parameter in later service
    // API versions and so that we don't have to expose that new optional parameter for other APIs like deleteDigitalTwin

    @Override
    public DeleteRelationshipRequestOptions setIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}
