// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// Code generated by Microsoft (R) AutoRest Code Generator.

package com.azure.resourcemanager.compute.models;

import com.azure.core.util.ExpandableStringEnum;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.util.Collection;

/** Defines values for HyperVGenerationType. */
public final class HyperVGenerationType extends ExpandableStringEnum<HyperVGenerationType> {
    /** Static value V1 for HyperVGenerationType. */
    public static final HyperVGenerationType V1 = fromString("V1");

    /** Static value V2 for HyperVGenerationType. */
    public static final HyperVGenerationType V2 = fromString("V2");

    /**
     * Creates or finds a HyperVGenerationType from its string representation.
     *
     * @param name a name to look for.
     * @return the corresponding HyperVGenerationType.
     */
    @JsonCreator
    public static HyperVGenerationType fromString(String name) {
        return fromString(name, HyperVGenerationType.class);
    }

    /** @return known HyperVGenerationType values. */
    public static Collection<HyperVGenerationType> values() {
        return values(HyperVGenerationType.class);
    }
}