import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='py-8 text-xl font-bold text-center  underline text-white mx-auto my-4 rounded bg-primary'>Blog</h2>
            <div className='w-10/12 max-w-[700px] mx-auto py-10 flex flex-col gap-6 '>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0  rounded">
                    <div className="collapse-title text-xl font-medium">
                        What is cors?
                    </div>
                    <div className="collapse-content">
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources.Don't need to conform CORS requirements when working with API from your backend application. Everything starts on the client side, before sending the main request. The client sends a CORS preflight request to a service for resources with parameters in HTTP headers (CORS headers). The service responses using the same headers with different or the same values. The web browser (client) will throw an error if the response does not meet the requirements of Cors preflight.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0  rounded">
                    <div className="collapse-title text-xl font-medium">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </div>
                    <div className="collapse-content">
                        <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps.<br>
                        </br>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
                            <ul>
                                <li>1. Email,password</li>
                                <li>2. Gmail</li>
                                <li>3. Facebook</li>
                                <li>4. Github</li>
                                <li>5. Twitter,etc.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0  rounded">
                    <div className="collapse-title text-xl font-medium">
                        How does the private route work?
                    </div>
                    <div className="collapse-content">
                        <p>Private route similar to public route.It's redirect the target URL, when successfully achieve the authenticate condition.
                            This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0  rounded">
                    <div className="collapse-title text-xl font-medium">
                        What is Node? How does Node work?
                    </div>
                    <div className="collapse-content">
                        <p>A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. The individual definition of each node depends on the type of network it refers to.Under the hood, each browser has its own individual JavaScript engine. This is the part of the browser that actually runs JavaScript. The engine used in Chrome is a lot like the engine that runs in Firefox, and so on. With some modification, you can take the JavaScript engine out of a browser and run it on its own.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;