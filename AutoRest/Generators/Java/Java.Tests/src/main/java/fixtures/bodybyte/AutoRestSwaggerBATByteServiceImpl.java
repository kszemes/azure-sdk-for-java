/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.bodybyte;

import com.microsoft.rest.ServiceClient;
import com.squareup.okhttp.OkHttpClient;
import retrofit.Retrofit;

/**
 * Initializes a new instance of the AutoRestSwaggerBATByteService class.
 */
public class AutoRestSwaggerBATByteServiceImpl extends ServiceClient implements AutoRestSwaggerBATByteService {
    private String baseUri;

    /**
     * Gets the URI used as the base for all cloud service requests.
     * @return The BaseUri value.
     */
    public String getBaseUri() {
        return this.baseUri;
    }

    private ByteOperations byteOperations;

    /**
     * Gets the ByteOperations object to access its operations.
     * @return the byteOperations value.
     */
    public ByteOperations getByteOperations() {
        return this.byteOperations;
    }

    /**
     * Initializes an instance of AutoRestSwaggerBATByteService client.
     */
    public AutoRestSwaggerBATByteServiceImpl() {
        this("http://localhost");
    }

    /**
     * Initializes an instance of AutoRestSwaggerBATByteService client.
     *
     * @param baseUri the base URI of the host
     */
    public AutoRestSwaggerBATByteServiceImpl(String baseUri) {
        super();
        this.baseUri = baseUri;
        initialize();
    }

    /**
     * Initializes an instance of AutoRestSwaggerBATByteService client.
     *
     * @param baseUri the base URI of the host
     * @param client the {@link OkHttpClient} client to use for REST calls
     * @param retrofitBuilder the builder for building up a {@link Retrofit}
     */
    public AutoRestSwaggerBATByteServiceImpl(String baseUri, OkHttpClient client, Retrofit.Builder retrofitBuilder) {
        super(client, retrofitBuilder);
        this.baseUri = baseUri;
        initialize();
    }

    private void initialize() {
        Retrofit retrofit = retrofitBuilder.baseUrl(baseUri).build();
        this.byteOperations = new ByteOperationsImpl(retrofit, this);
    }
}
