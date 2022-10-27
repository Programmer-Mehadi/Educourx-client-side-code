import React from 'react';

const Faq = () => {
    return (
        <div>
            <h2 className='py-8 text-xl font-bold text-center'>Frequently Asked Questions</h2>
            <div className='w-10/12 max-w-[700px] mx-auto py-10 flex flex-col gap-6 '>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Can I start for free and pay later?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you absolutely can start your course in the audit track and then upgrade to the verified track later, so long as the upgrade deadline has not passed.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Where do I find the upgrade deadline?
                    </div>
                    <div className="collapse-content">
                        <p>You can find the deadline on the right side of the course homepage under Important Dates listed as the Verification Upgrade Deadline.If there's no upgrade deadline listed there, then the upgrade deadline has passed.

                            It is not possible to upgrade after the deadline or the course end. If the course's final end date is approaching or has already passed, it will be listed under Upcoming Dates as well.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        A learner or instructor is harassing me - what can I do?
                    </div>
                    <div className="collapse-content">
                        <p>Please report your concern directly to the course team or contact us to report your concern, and we will notify the appropriate course team (or the course provider's leadership, as appropriate).
                            In addition, some course providers have participation policies, escalation protocols, and other institution resources for managing course behavior. All individuals are expected to abide by these terms and can be removed from a course or have their edX account terminated if they violate these terms.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300  0 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Responding to Inappropriate Learner Behavior
                    </div>
                    <div className="collapse-content">
                        <p> Please report your concern directly to the course team or contact us to report your concern, and we will notify the appropriate course team (or the course provider's leadership, as appropriate).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;