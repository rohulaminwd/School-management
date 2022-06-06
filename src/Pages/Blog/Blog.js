import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mx-2 md:mx-8 lg:mx-lg'>
            <h1 className='text-3xl text-primary font-bold uppercase my-8 text-center'>question and answer</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>How will you improve the performance of a React Application?</h1>
                    <div className="mt-3">
                        <p>React application easy optimize user Interface, React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate. React have many feater state hook arc ist very good performance.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>What are the different ways to manage a state in a React application?</h1>
                    <div className="mt-3">
                        <p>React have fore main types react state, different way manage state react custom hook at fist  a new file file name must be use start name and name function declare and export this function and it use another component</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'> How does prototypical inheritance work?</h1>
                    <div className="mt-3">
                        <p>prototypical inheritance work method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'> Why you do not set the state directly in React?</h1>
                    <div className="mt-3">
                        <p>One should never update the state directly because When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>How will you implement a search to find products by name?</h1>
                    <div className="mt-3">
                        <p>After we search for or filter your products, we can save the search or filter so that you can easily use it again later. <br /> After we set up your filters or search for words, click Save search and give your search a name. <br /> Next time that you need to find the products that match the same search words or filters, click the tab that is labelled with the search name. The product list will immediately update with the subset of products.

                        </p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>What is a unit test? Why should write unit tests?</h1>
                    <div className="mt-3">
                        <p>Unit Test is a type of software testing where individual units or components of a software are tested. Unit tests help to fix bugs early in the development cycle and save costs. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;