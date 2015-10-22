// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
// 
// Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace Fixtures.AcceptanceTestsRequiredOptional
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Rest;
    using Models;

    public static partial class ImplicitModelExtensions
    {
            /// <summary>
            /// Test implicitly required path parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='pathParameter'>
            /// </param>
            public static Error GetRequiredPath(this IImplicitModel operations, string pathParameter)
            {
                return Task.Factory.StartNew(s => ((IImplicitModel)s).GetRequiredPathAsync(pathParameter), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly required path parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='pathParameter'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<Error> GetRequiredPathAsync( this IImplicitModel operations, string pathParameter, CancellationToken cancellationToken = default(CancellationToken))
            {
                HttpOperationResponse<Error> result = await operations.GetRequiredPathWithHttpMessagesAsync(pathParameter, null, cancellationToken).ConfigureAwait(false);
                return result.Body;
            }

            /// <summary>
            /// Test implicitly optional query parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='queryParameter'>
            /// </param>
            public static void PutOptionalQuery(this IImplicitModel operations, string queryParameter = default(string))
            {
                Task.Factory.StartNew(s => ((IImplicitModel)s).PutOptionalQueryAsync(queryParameter), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly optional query parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='queryParameter'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PutOptionalQueryAsync( this IImplicitModel operations, string queryParameter = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                await operations.PutOptionalQueryWithHttpMessagesAsync(queryParameter, null, cancellationToken).ConfigureAwait(false);
            }

            /// <summary>
            /// Test implicitly optional header parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='queryParameter'>
            /// </param>
            public static void PutOptionalHeader(this IImplicitModel operations, string queryParameter = default(string))
            {
                Task.Factory.StartNew(s => ((IImplicitModel)s).PutOptionalHeaderAsync(queryParameter), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly optional header parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='queryParameter'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PutOptionalHeaderAsync( this IImplicitModel operations, string queryParameter = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                await operations.PutOptionalHeaderWithHttpMessagesAsync(queryParameter, null, cancellationToken).ConfigureAwait(false);
            }

            /// <summary>
            /// Test implicitly optional body parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='bodyParameter'>
            /// </param>
            public static void PutOptionalBody(this IImplicitModel operations, string bodyParameter = default(string))
            {
                Task.Factory.StartNew(s => ((IImplicitModel)s).PutOptionalBodyAsync(bodyParameter), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly optional body parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='bodyParameter'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PutOptionalBodyAsync( this IImplicitModel operations, string bodyParameter = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                await operations.PutOptionalBodyWithHttpMessagesAsync(bodyParameter, null, cancellationToken).ConfigureAwait(false);
            }

            /// <summary>
            /// Test implicitly required path parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            public static Error GetRequiredGlobalPath(this IImplicitModel operations)
            {
                return Task.Factory.StartNew(s => ((IImplicitModel)s).GetRequiredGlobalPathAsync(), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly required path parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<Error> GetRequiredGlobalPathAsync( this IImplicitModel operations, CancellationToken cancellationToken = default(CancellationToken))
            {
                HttpOperationResponse<Error> result = await operations.GetRequiredGlobalPathWithHttpMessagesAsync(null, cancellationToken).ConfigureAwait(false);
                return result.Body;
            }

            /// <summary>
            /// Test implicitly required query parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            public static Error GetRequiredGlobalQuery(this IImplicitModel operations)
            {
                return Task.Factory.StartNew(s => ((IImplicitModel)s).GetRequiredGlobalQueryAsync(), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly required query parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<Error> GetRequiredGlobalQueryAsync( this IImplicitModel operations, CancellationToken cancellationToken = default(CancellationToken))
            {
                HttpOperationResponse<Error> result = await operations.GetRequiredGlobalQueryWithHttpMessagesAsync(null, cancellationToken).ConfigureAwait(false);
                return result.Body;
            }

            /// <summary>
            /// Test implicitly optional query parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            public static Error GetOptionalGlobalQuery(this IImplicitModel operations)
            {
                return Task.Factory.StartNew(s => ((IImplicitModel)s).GetOptionalGlobalQueryAsync(), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <summary>
            /// Test implicitly optional query parameter
            /// </summary>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<Error> GetOptionalGlobalQueryAsync( this IImplicitModel operations, CancellationToken cancellationToken = default(CancellationToken))
            {
                HttpOperationResponse<Error> result = await operations.GetOptionalGlobalQueryWithHttpMessagesAsync(null, cancellationToken).ConfigureAwait(false);
                return result.Body;
            }

    }
}
