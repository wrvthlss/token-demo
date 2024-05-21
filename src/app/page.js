import Image from "next/image";

export default function Home() {
    return (
        <>
        <header className='for-nav bg-blue-700 text-white pl-20 text-sm'>
            <ul className='flex justify-start py-4 font-bold'>
                <li>For Employers</li>
                <li>For Producers</li>
                <li>For Providers</li>
                <li>Medicaid Renewal</li>
            </ul>
        </header>

        <nav className='flex justify-between items-center bg-white py-4 pl-20 pr-20 text-sm'>
            <div className='flex items-center space-x-4'>
                <div className='logo'>
                    <Image src='/logo.svg' alt='logo' height={50} width={150}/>
                </div>
                <ul className='flex space-x-4'>
                    <li className='flex items-center'>Insurance Plans<span
                        className='ml-1'>&#x25BC;</span></li>
                    <li className='flex items-center'>Member Support<span
                        className='ml-1'>&#x25BC;</span></li>
                    <li className='flex items-center'>Health & Wellness Resources<span
                        className='ml-1'>&#x25BC;</span></li>
                </ul>
            </div>
            <div className='flex space-x-2'>
                <button className='grn-cta text-white px-4 py-2 rounded hover:bg-green-600'>Find Care
                </button>
                <button className='blu-cta text-white px-4 py-2 rounded hover:bg-blue-600'>Log In</button>
            </div>
        </nav>

        <section className='masthead text-sm'>
            <div className='msbg pt-20 pl-20' style={{backgroundImage: "url('/masthead-bg.jpeg')", height: "510px"}}>
                <h1 className='pb-4 w-1/2'>Medicaid Renewal and Healthcare Coverage</h1>
                <p className='pb-4 w-1/2'>Learn more about Medicaid renewal, also called
                    Medicaid redetermination, and the possible
                    impacts to your current health plan. We are here to help you stay covered.</p>
                <p className='pb-4 masthead-help w-1/2'><strong>Need help?</strong> Answer a few quick questions
                    to
                    learn which health coverage
                    you qualify for, as well as daily needs like food and transportation.</p>
                <button className='ylo-cta'>Get Started</button>
                <p className='pb-4 pt-4'>Or call us at the number below to learn more.</p>
                <button className='blu-cta'>866-545-0385</button>
            </div>
        </section>
            <main className='w-full justify-center flex text-sm px-16'>
                <div className='w-full'>
                    {/* Feats Section */}
                    <section className='feats flex justify-between pt-12 pb-12 gap-8'>
                        <div className='feat-1 flex items-center space-x-5'>
                            <Image src='/feat1.svg' alt='feature 1 icon' width={64} height={64}/>
                            <span>Enrolled in a Medicaid, CHIP, or Expansion plan and want to prepare for renewal? Keep your
                        address updated with your state agency and watch for your renewal packet by mail.
                    </span>
                        </div>

                        <div className='feat-2 flex items-center space-x-5'>
                            <Image src='/feat2.svg' alt='feature 2 icon' width={64} height={64}/>
                            <span>If you lose Medicaid coverage, you are eligible for a special enrollment period.
                        You typically have 60 days to find a new health insurance plan from the time you lose Medicaid.
                        </span>
                        </div>

                        <div className='feat-3 flex items-center space-x-5'>
                            <Image src='/feat3.svg' alt='feature 3 icon' width={64} height={64}/>
                            <span>Earn too much to qualify for Medicaid? You may qualify for an
                            Individual & Family Health Insurance Plan as low as $0 a month.
                    </span>
                        </div>
                    </section>

                    <div className='h-2 bg-gray-50 bar'></div>

                    <section className='mid-call-out text-center pb-20 mt-20 text-sm px-24'>
                        <h2 className='pb-6'>Medicaid Renewal & Redetermination: What you Need To Know</h2>
                        <p className='pb-6'>During the Public Health Emergency (PHE), nearly all Medicaid, Children
                            Health
                            Insurance Plans
                            (CHIP),
                            and Expansion members kept their coverage, regardless of changes in eligibility or status.
                            Legislation signed on December 29, 2022 allowed states to begin removing ineligible members
                            from
                            their Medicaid programs starting April 1, 2023.</p>
                        <h3 className='pb-6'>You May Lose Coverage If You No Longer Qualify For Medicaid</h3>
                        <p>Medicaid renewals, also known as Medicaid redeterminations, have started again and millions
                            of
                            individuals will need to take action to keep their current Medicaid coverage, or, if they no
                            longer
                            qualify, find a new health plan that’s right for them. We can help you with your options,
                            should you lose coverage.</p>
                    </section>

                    <div className='h-2 bg-gray-50 bar'></div>

                    <section className='left-right-001 flex items-center px-8 pb-24 pt-8 text-sm mt-20 gap-12'>
                        <div className='flex-1'>
                            <h2 className='text-2xl font-bold mb-4'>Three Steps to Renew your Medicaid Coverage</h2>
                            <p className='mb-4'>We are here to help you prepare for your Medicaid renewal. Watch
                                this video to get answers to your renewal questions, and learn how simple it can be to
                                stay
                                covered.</p>
                        </div>
                        <div className='flex-1'>
                            <Image src='/3steps.png' alt='three steps' width={530} height={300} className='ml-auto'/>
                        </div>
                    </section>
                    <div className='h-2 bg-gray-50 bar'></div>


                    <section className='toggle-columns text-sm pt-20 px-8'>
                        <h1 className='text-center'>Frequently Asked Questions About Medicaid Renewal</h1>

                        <div className='left-right flex items-start pt-12'>
                            <div className='flex-1'>
                                <Image src='/faq1.webp' alt='what is medicaid renewal' width={440} height={470}
                                       className='genrad'/>
                            </div>
                            <div className='flex-1 space-y-4'>
                                <h3 className='mb-2 font-bold pb-2'>What is Medicaid Renewal</h3>
                                <div className='list-w-ico flex items-start space-x-2 pb-4'>
                                    <Image src='/feat1.svg' alt='feat1' width={40} height={40}/>
                                    <div>
                                        <p className='leading-6'>Medicaid renewal is a yearly review completed by your
                                            state to check if
                                            you’re
                                            still
                                            eligible for Medicaid coverage. In most states, you have to renew your
                                            coverage
                                            every year to
                                            keep it. Medicaid renewals have restarted in all states following the end of
                                            the
                                            Public
                                            Health Emergency. <strong>Missing the deadline, not completing paperwork, or
                                                forgetting a step in
                                                the renewal process all put you at risk of losing Medicaid
                                                coverage.</strong></p>
                                    </div>
                                </div>

                                <div className='list-w-ico flex items-start space-x-2 pb-4'>
                                    <Image src='/feat2.svg' alt='feat2' width={40} height={40}/>
                                    <p className='leading-6'><strong>If you’ve had a change in income, age, or other
                                        qualifying
                                        factors</strong> since
                                        you
                                        enrolled in Medicaid, it’s possible you will no longer qualify. The only way to
                                        know
                                        for
                                        sure is to renew on time.</p>
                                </div>

                                <div className='list-w-ico flex items-start space-x-2'>
                                    <Image src='/feat3.svg' alt='feat3' width={40} height={40}/>
                                    <p className='leading-6'>When it’s time for you to renew, you’ll get a notice
                                        telling you what to
                                        do. <strong>Be
                                            sure
                                            to follow the steps to renew before your deadline.</strong> If you have
                                        questions,
                                        call
                                        the
                                        Member Services number on your insurance ID card.</p>
                                </div>
                            </div>
                        </div>


                        <div className='right-left flex items-center px-6 pt-28 pb-24'>
                            <div className='flex-1'>
                                <h3 className='mb-6 font-bold'>What is The Public Health Emergency?</h3>
                                <p className='mb-4 leading-6'>As a result of the COVID-19 pandemic, a Public Health
                                    Emergency
                                    was put into place by the
                                    federal government on January 27, 2020. Prior federal law addressing the COVID-19
                                    pandemic paused
                                    yearly state Medicaid renewals.</p>
                            </div>
                            <div className='flex-1'>
                                <Image src='/faq2.webp' alt='three steps' width={440} height={300}
                                       className='ml-auto genrad'/>
                            </div>
                        </div>


                        <div className='left-right flex items-start p-8'>
                            <div className='flex-1'>
                                <Image src='/lesbian-couple.jpeg' alt='what is medicaid renewal' width={440}
                                       height={470}
                                       className='genrad'/>
                            </div>
                            <div className='flex-1 space-y-4'>
                                <h3 className='font-bold mb-6'>What Can I Do Now To Prepare For Medicaid Renewal?</h3>
                                <div className='list-w-ico flex items-start space-x-2'>
                                    <Image src='/circl1.svg' alt='feat1' width={40} height={40}/>
                                    <div>
                                        <p className='leading-6'><strong>Check if your state agency has your current
                                            mailing address and contact
                                            information.</strong> If you’ve moved or your contact information has
                                            changed,
                                            <a href='#'> contact
                                                your state now.</a> Important updates about your coverage come through
                                            the mail,
                                            including a notice when it’s time for you to renew. If your contact
                                            information
                                            isn’t up to date with your state agency, you may miss these notices.</p>
                                    </div>
                                </div>

                                <div className='list-w-ico flex items-start space-x-2'>
                                    <Image src='/circl2.svg' alt='feat2' width={40} height={40}/>
                                    <p className='leading-6'><strong>Understand your health coverage
                                        options.</strong> If you’ve had major changes in your
                                        income,
                                        or household, it’s a good idea to explore other health plans now in case you no
                                        longer qualify for Medicaid. You may even be eligible for a low or no-cost
                                        Individual and Family Marketplace plan.*<br/><br/>
                                        <a href='#'> Check what health coverage you may qualify for</a>, including
                                        health insurance and
                                        other
                                        benefits like food and transportation.</p>
                                </div>

                                <div className='list-w-ico flex items-start space-x-2'>
                                </div>
                            </div>
                        </div>

                        <div className='right-left flex items-center px-8 pt-24'>
                            <div className='flex-1'>
                                <h3 className='mb-6 font-bold'>If I Am Working, Can I Get Health Coverage Through My
                                    Job?</h3>
                                <p className='mb-6 leading-6'>If you lose Medicaid, but are working, you may have access
                                    to
                                    health coverage through your job. You typically have 60 days from the date you lose
                                    Medicaid to enroll in coverage through your job. Ask your employer about your
                                    options.
                                </p>
                                <p className='leading-6'>
                                    However, if you or your family members are not covered under a health plan offered
                                    through your job, <a href='#'>Individual and Family Marketplace insurance
                                    plans</a> may be an
                                    option.
                                    With the new <a href='#'>IRS rule</a> to make health coverage more <a
                                    href='#'>affordable</a>, you and your family
                                    members may now be eligible to receive financial help on a Marketplace insurance
                                    plan.
                                </p>
                            </div>
                            <div className='flex-1'>
                                <Image src='/stupid-smiley.webp' alt='three steps' width={470} height={470}
                                       className='ml-auto genrad'/>
                            </div>
                        </div>


                        <div className='left-right flex items-start px-8 pt-28 pb-28'>
                            <div className='flex-1'>
                                <div className='skt genrad' style={{backgroundImage: "url('/skating.webp')"}}></div>
                            </div>
                            <div className='flex-1 space-y-4'>
                                <h3 className='mb-2 font-bold'>Can I Help Another Person With Their Medicaid Or CHIP
                                    Renewal?</h3>
                                <div className='list-w-ico flex items-start space-x-2'>
                                    <div>
                                        <p className='leading-6'>You may have the opportunity to help someone else with
                                            their Medicaid or CHIP
                                            renewal, including your child, a family member, or a friend. Keep in mind,
                                            if
                                            you help someone else, you may be asked to show that you are a legal
                                            guardian or
                                            authorized representative.</p>
                                        <p className='pt-4'>Below are ways you can help someone navigate Medicaid
                                            renewal:</p>
                                    </div>
                                </div>

                                <div className='list-w-ico flex items-start space-x-2'>
                                    <ul className='list-decimal pl-4'>
                                        <li className='flex items-start pb-4'>
                                            <span className='mr-2 leading-6 text-gray-500'>1.</span>
                                            <span className='leading-6'><strong>Check that the person’s state agency has their current mailing address and contact information</strong>. If they’ve moved or their contact information has changed, they should <a
                                                href='#'>contact the state </a>immediately to update their records.</span>
                                        </li>
                                        <li className='flex items-start pb-4'>
                                            <span className='mr-2 leading-6 text-gray-500'>2.</span>
                                            <span className='leading-6'><strong>Watch for mail about Medicaid renewal from the state</strong>. If a Medicaid request or renewal packet arrives from the state health insurance agency, be sure to respond by the due date.</span>
                                        </li>
                                        <li className='flex items-start'>
                                            <span className='mr-2 leading-6 text-gray-500'>3.</span>
                                            <span className='leading-6'><strong>Help them with other health coverage options if they are no longer eligible for Medicaid or CHIP.</strong> If they do not have access to health coverage through their job or a family member’s job, <a
                                                href='#'>Individual and Family Marketplace insurance plans</a> may be an option. Also, in some states, children who lose their Medicaid benefits may be eligible or CHIP or other programs.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className='h-2 bg-gray-50 bar'></div>

                    <section className='text-sm pt-24'>
                        <h2 className='text-center pb-4'>
                            How Can I Find Affordable Health Coverage If I No Longer Qualify For Medicaid?</h2>
                        <p className='text-center px-12'>We can help connect you to a plan that’s right for you. If you
                            can’t
                            get
                            health insurance through
                            your job and you’re under age 65, an <a href='#'> Individual and Family plan </a>through the
                            Health Insurance
                            Marketplace may be right for you.</p>

                        <div className='left-right flex items-start p-8 pt-16'>
                            <div className='flex-1'>
                                <Image src='/p1.webp' alt='what is medicaid renewal' width={460} height={365}
                                       className='genrad'/>
                            </div>
                            <div className='flex-1 space-y-4 mt-16'>
                                <h3 className='mb-2 font-bold'>How Much Does Marketplace Health Insurance Cost?</h3>
                                <div className='flex items-start'>
                                    <div>
                                        <p className='leading-6'><strong>Individual and Family Marketplace health
                                            insurance plans are available to
                                            anyone
                                            who does not have health insurance</strong>, including those no longer
                                            eligible for
                                            Medicaid. Marketplace plans are available in Bronze, Silver, and Gold <a
                                                href='#'>metal
                                                levels</a> and offer benefits like doctor visits, prescriptions,
                                            hospital care,
                                            and
                                            mental health care. <strong>You also may be eligible for <a href='#'>financial
                                                help (a subsidy)</a>
                                                that
                                                could lower your premium (monthly payment) - or even reduce it to $0 a
                                                month.*</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='two-by-two grid grid-cols-1 md:grid-cols-2 gap-16 px-8 pt-16'>
                            <div className='flex items-start'>
                                <Image src='/cal001.svg' alt='calendar' width={250} height={250} className='mr-4'/>
                                <div>
                                    <h4 className='font-semibold mb-2'>When Can I Enroll In Marketplace Health Insurance
                                        After Losing Medicaid Coverage?</h4>
                                    <p className='leading-6'>Open Enrollment to enroll in an Individual and Family
                                        Marketplace insurance plan
                                        runs
                                        every year from November 1 through January 15, in most states. If you no longer
                                        qualify for
                                        Medicaid coverage, you are eligible for a <a href='#'> special enrollment
                                            period</a>. <strong>You
                                            typically
                                            have
                                            60 days</strong> from the date you lose Medicaid to apply for a Marketplace
                                        insurance
                                        plan or
                                        to
                                        enroll in coverage through your job.1</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <Image src='/cal002.svg' alt='calendar' width={150} height={150} className='mr-4'/>
                                <div>
                                    <h4 className='font-semibold mb-2'>Are There Marketplace Insurance Plan Options with
                                        $0
                                        Monthly Premiums?</h4>
                                    <p className='leading-6'>Yes. While <strong>you may earn too much to remain eligible
                                        for Medicaid coverage, you
                                        may
                                        qualify for an Individual and Family Marketplace insurance plan that has a
                                        monthly
                                        premium
                                        payment as low as $0</strong> (after your subsidy is applied).*</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <Image src='/cal003.svg' alt='calendar' width={48} height={48}
                                       className='mr-4 ico-pos'/>
                                <div>
                                    <h4 className='font-semibold mb-2'>What Are Cost-Sharing Reductions?</h4>
                                    <p className='leading-6'>Along with a subsidy that can lower your monthly premium,
                                        cost-sharing reductions
                                        (CSRs)
                                        are extra savings that can reduce your <a href='#'>out-of-pocket costs</a> when
                                        you get medical
                                        care. If
                                        your income is within the range that qualifies you for a CSR, <strong>you must
                                            enroll in
                                            a
                                            plan in
                                            the <a href='#'>Silver tier</a> to receive the extra savings.</strong></p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <Image src='/cal004.svg' alt='calendar' width={48} height={48}
                                       className='mr-4 ico-pos'/>
                                <div>
                                    <h4 className='font-semibold mb-2'>How Do I Enroll In A Marketplace Insurance
                                        Plan?</h4>
                                    <p className='leading-6'>You can <a href='#'>enroll online</a>, or we can help guide
                                        you through the application process
                                        to
                                        find
                                        an Individual and Family <a href='#'>Marketplace insurance plan</a> that fits
                                        your needs and
                                        budget.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className='text-center pt-16 pb-4'>Continuing your care With Anthem</h2>
                        <p className='text-center mb-4 leading-6 px-8'>We want to make sure you have a smooth transition
                            from Medicaid
                            to
                            your new Anthem Individual and
                            Family coverage plan. That is why our care team will be available to talk about any recent
                            health
                            issues or ongoing concerns. They will also work directly with your doctors to make sure you
                            get
                            the
                            regular care and medicines you need.
                        </p>
                        <p className='text-center leading-6 px-8'>If you need immediate access to medications that are
                            not covered
                            under
                            your new plan, you will be
                            granted a one-time 30-day courtesy prescription drug refill. After that, you will need to
                            contact
                            your doctor to submit a prior authorization request.
                        </p>
                    </section>

                    <div className='h-2 bg-gray-50 bar mt-24 mb-20'></div>

                    <section className='shield text-sm'>
                        <div className='shield-lock-up flex flex-col items-center text-center px-8 pb-20'>
                            <Image src='/shield.jpeg' alt='shield' width={340} height={360} className='mb-4'/>
                            <h2 className='font-bold mb-4 px-8'>You Can Feel Confident You have Health Insurance
                                Options</h2>
                            <p className='mb-4 leading-6 px-64'>You have other healthcare plan options if you lose
                                Medicaid or CHIP. We
                                can
                                help you make the
                                transition and find a plan that fits your needs and your budget.</p>
                            <button
                                className='blu-cta bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Explore
                                Your Options
                            </button>
                        </div>

                        <div className='one-row-two-col grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
                            <div className='img-h-p-l flex items-start'>
                                <Image src='/bgrid001.webp' alt='baby and dad' width={80} height={110}
                                       className='mr-4 mb-4 genrad'/>
                                <div>
                                    <h3 className='font-semibold mb-2'>Does Medicaid Redetermination Affect You?</h3>
                                    <p className='mb-2'>Read about Medicaid eligibility after the COVID-19 Public Health
                                        Emergency.</p>
                                    <a href='#' className='text-blue-500 hover:underline'>Learn more about Medicaid
                                        Redetermination</a>
                                </div>
                            </div>
                            <div className='img-h-p-l flex items-start'>
                                <Image src='/bgrid002.webp' alt='baby and dad' width={80} height={110}
                                       className='mr-4 mb-4 genrad'/>
                                <div>
                                    <h3 className='font-semibold mb-2'>Know More About Medicaid Unwinding</h3>
                                    <p className='mb-2'>Be prepared for the Medicaid renewal process.</p>
                                    <a href='#' className='text-blue-500 hover:underline'>Get the facts on Medicaid
                                        Unwinding</a>
                                </div>
                            </div>
                        </div>

                        <h2 className='text-center mt-12 mb-10'>Understand Your Coverage Options</h2>

                        <div className='one-row-two-col grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
                            <div className='img-h-p-l flex items-start'>
                                <Image src='/bgrid003.webp' alt='baby and dad' width={80} height={110}
                                       className='mr-4 mb-4 genrad'/>
                                <div>
                                    <h3 className='font-semibold mb-2'>Medicaid Plans</h3>
                                    <p className='mb-2'>If you need information about Medicaid, call the number on the
                                        back
                                        of your ID card.</p>
                                    <a href='#' className='text-blue-500 hover:underline'>Learn More</a>
                                </div>
                            </div>
                            <div className='img-h-p-l flex items-start'>
                                <Image src='/bgrid004.webp' alt='baby and dad' width={80} height={110}
                                       className='mr-4 mb-4 genrad'/>
                                <div>
                                    <h3 className='font-semibold mb-2'>Individual & Family Marketplace Insurance
                                        Plans</h3>
                                    <p className='mb-2' style={{width: '340px'}}>If you are under 65, find low or
                                        no-cost health plans for you and
                                        your family.</p>
                                    <a href='#' className='text-blue-500 hover:underline'>Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className='one-row-two-col grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
                            <div className='img-h-p-l flex items-start'>
                                <Image src='/bgrid005.webp' alt='baby and dad' width={80} height={110}
                                       className='mr-4 mb-4 genrad'/>
                                <div>
                                    <h3 className='font-semibold mb-2'>Medicare Plans</h3>
                                    <p className='mb-2' style={{width: '340px'}}>If you’re 65 or older, find information
                                        about Medicare health
                                        plans.</p>
                                    <a href='#' className='text-blue-500 hover:underline'>Learn More</a>
                                </div>
                            </div>
                            <div className='img-h-p-l flex items-start'>
                                <Image src='/bgrid006.webp' alt='baby and dad' width={80} height={110}
                                       className='mr-4 mb-4 genrad'/>
                                <div>
                                    <h3 className='font-semibold mb-2'>Plans Available Through Your Job</h3>
                                    <p className='mb-2'>If you’re working, ask your employer about your health plan
                                        options.
                                        If you or your
                                        family are not covered under a health plan through work, explore Individual &
                                        Family
                                        plan options.</p>
                                    <a href='#' className='text-blue-500 hover:underline'>Learn More</a>
                                </div>
                            </div>
                        </div>

                        <h2 className='text-center mt-12 mb-2'>Additional Information</h2>
                        <p className='text-center'>Stay informed by checking these useful resources for additional
                            information on Medicaid renewals and more.</p>
                        <div className='slots-l-r grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
                            <div className='strip-btn flex items-start'>
                                <div>Health and Human Services (HHS)</div>
                            </div>
                            <div className='strip-btn flex items-start'>
                                <div>Centers for Medicare and Medicaid Services (CMS)</div>
                            </div>
                        </div>
                    </section>

                    <div className='h-2 bg-gray-50 bar mt-12 mb-10'></div>

                    {/*current*/}
                    <section className='pre-footer px-8'>
                        <p className='mb-4'>1 Guidance may be issued at a later date extending the special enrollment
                            period in some
                            circumstances.</p>
                        <p className='mb-4'>* Based on federal and/or state exchange requirements and subject to change.
                            Anthem Blue Cross
                            and
                            Blue Shield and HealthKeepers, Inc. are Qualified Health Plan issuers that in certain
                            geographic
                            areas offers some health plans with a $0 (or $1 in Maine and Connecticut) premium option
                            (after
                            subsidy applied) through the Health Insurance Marketplace or your State Exchange. Anthem and
                            Anthem
                            HealthKeepers health plans with a $0 (or $1) premium option are not available in all areas
                            and
                            eligibility for these plans is based on federal annual income guidelines. Call us for
                            information
                            because not everyone will qualify. For example, singles earning up to $21,870, and couples
                            earning
                            up to $29,580 may be eligible. Family income eligibility varies based on number of family
                            members.</p>
                        <p className='mb-4'>This marketing material is not yet approved in all states.</p>
                        <p>A02248MUMENABS</p>
                    </section>


                </div>
            </main>
            <footer className='bg-black text-white py-16 mt-16 text-sm'>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-28'>
                        <div className='ftr-col-1'>
                            <ul className='space-y-2'>
                                <li>About Anthem</li>
                                <li>Careers</li>
                                <li>News From Our Press Room</li>
                                <li>Site Map</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='ftr-col-2'>
                            <ul className='space-y-2'>
                                <li>Individual & Family</li>
                                <li>Transparency in Coverage</li>
                                <li>Medicare</li>
                                <li>Medicaid</li>
                                <li>Federal Employees</li>
                                <li>Employers</li>
                                <li>Producers</li>
                                <li>Providers</li>
                            </ul>
                        </div>
                        <div className='ftr-col-3 space-y-4'>
                            <div className='foot-link-ico flex items-center space-x-2 fstripe'>
                                <Image src='/x.svg' alt='X logo' width={24} height={24}/>
                                <p>Follow us on X</p>
                            </div>
                            <div className='foot-link-ico flex items-center space-x-2 fstripe pb-2'>
                                <Image src='/youtube.png' alt='YouTube logo' width={24} height={24}/>
                                <p>Subscribe to our YouTube channel</p>
                            </div>
                            <div className='foot-link-ico flex items-center space-x-2 fstripe'>
                                <Image src='/fb.svg' alt='Facebook logo' width={24} height={24}/>
                                <p>Facebook</p>
                            </div>
                            <div className='foot-link-ico flex items-center space-x-2 mb-6 pb-2 fstripe'>
                                <Image src='/syd.svg' alt='Sydney Health App logo' width={24} height={24}/>
                                <p>Download the Sydney Health App</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
