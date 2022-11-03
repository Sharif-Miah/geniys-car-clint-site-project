import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title } = useLoaderData();
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Profile</p>
                            <p className="text-xs">Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className="text-sm">Username</label>
                                <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 text-gray-900 py-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="website" className="text-sm">Website</label>
                                <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 dark:text-gray-900 py-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className="text-sm">Username</label>
                                <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 text-gray-900 py-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="website" className="text-sm">Website</label>
                                <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 dark:text-gray-900 py-3" />
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Bio</label>
                                <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 dark:text-gray-900"></textarea>
                            </div>
                            <button type="button" className="px-4 py-2 border rounded-md bg-orange-500 text-white font-bold border-gray-100">Change</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default CheckOut;