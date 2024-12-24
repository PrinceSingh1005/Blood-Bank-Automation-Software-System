import React from "react";

const Services = () => {
    const service = [
        {
            id: "1",
            title: "Blood Donation",
            description: "We facilitate safe and convenient blood donation processes. Join us in saving lives by donating blood regularly.",
            image: "Blood_donation.jpg"
        },
        {
            id: "2",
            title: "Volunteer Programs",
            description: "Become a volunteer and help us organize blood donation camps, spread awareness, and save lives.",
            image: "volunteer.jpg"
        },
        {
            id: "3",
            title: "Patient Support",
            description: "We provide support to patients in need of blood by connecting them with available donors. Together, we ensure no one is left behind.",
            image: "Patient_support.jpg"
        },
        {
            id: "4",
            title: "Emergency Blood Services",
            description: "In times of emergency, we offer quick access to blood donors who are available to provide critical blood support when it's needed most.",
            image: "Emergency_services.jpg"
        },
        {
            id: "5",
            title: "Health Checkups for Donors",
            description: "We provide regular health checkups for our donors to ensure they are fit and healthy, and able to donate blood safely.",
            image: "Health_checkups.jpg"
        },
        {
            id: "6",
            title: "Donation Camp Scheduling",
            description: "We organize blood donation camps regularly in your community. Stay informed about upcoming camps and schedule your donation.",
            image: "Donation_camp.jpg"
        }
    ];

    return (
        <div className="h-auto pt-24 pb-2 bg-gradient-to-b from-red-300 to-red-200">
            <div className="text-center mb-12">
                <div className="text-4xl font-bold text-red-600 uppercase border-b-2 border-red-500 inline-block">Our Services</div>
                <p className="text-xl text-gray-600 mt-4">
                    We offer a variety of services to help make blood donation easier and more impactful. Explore how we can help you contribute to this life-saving cause.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                {service.map((serve) => {
                    return (
                        <div className="overflow-hidden rounded-lg relative">
                            <div
                                key={serve.id}
                                className="relative bg-cover bg-center p-6 rounded-lg shadow-lg hover:shadow-xl duration-300 h-80 hover:scale-105 transition ease-in"
                                style={{
                                    backgroundImage: `url(${serve.image})`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center p-6">
                                    <div className="text-center text-white">
                                        <h3 className="text-2xl font-semibold">{serve.title}</h3>
                                        <p className="text-gray-200 mt-4">{serve.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
