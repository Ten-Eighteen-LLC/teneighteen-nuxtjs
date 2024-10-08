<template>
  <div>
    <NavFive />
    <section :class="'privacy-page section-b-space'">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12 mb-3 mt-5">
            <h2 class="text-darkgold">Privacy Policy</h2>
            <span class="text-gold small">Last updated: February 07, 2023</span>
          </div>
          <div class="bg-white col-md-8 p-4 shadow-sm text-left">
            <div class="sqs-block-content mobile text-justify privacy-policy">
              <ol>
                <li v-for="(policy, policyIndex) in policies" :key="policyIndex" class="d-inline-block">
                  <br>
                  <p><strong>{{ policy.subject }}</strong></p>
                  <p>{{ policy.description }}</p>
                  <ol v-if="!policy.description">
                    <li v-for="(content, contentIndex) in policy.contents" :key="contentIndex">
                      <p>{{ content.text }}</p>
                      <ol type="a" v-if="content.descriptions">
                        <li v-for="(subContent, descIndex) in content.descriptions" :key="descIndex">
                          <p v-if="!subContent.details">{{ subContent }}</p>
                          <p v-else>{{ subContent.description }}</p>
                          <ol v-if="subContent.details">
                            <li v-for="(detail, detailIndex) in subContent.details" :key="detailIndex">
                              <p>{{ detail }}</p>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterTwo />
  </div>
</template>

<script>
import NavFive from "../components/NavFive";
import FooterTwo from "../components/FooterTwo";

export default {
  name: 'Terms',
  head(){
    return {
      title: "Ten Eighteen  - Terms and Conditions",
    }
  },
  components: {
    NavFive,
    FooterTwo
  },
  data () {
    return {
      policies: [
        {
          subject: 'Introduction',
          contents: [
            {text:
		            'Welcome to the Ten Eighteen LLC. platform and its affiliates (individually and collectively, "Ten Eighteen LLC", "we", "us" or "our"). Ten Eighteen LLC. takes its responsibilities under applicable privacy laws and regulations ("Privacy Laws") seriously and is committed to respecting the privacy rights and concerns of all Users of our Ten Eighteen LLC. website (the "Site") (we refer to the Site and the services we provide as described in our Site collectively as the "Services"). We recognize the importance of the personal data you have entrusted to us and believe that it is our responsibility to properly manage, protect and process your personal data. This Privacy Policy (“Privacy Policy” or “Policy”) is designed to assist you in understanding how we collect, use, disclose and/or process the personal data you have provided to us and/or we possess about you, whether now or in the future, as well as to assist you in making an informed decision before providing us with any of your personal data. Please read this Privacy Policy carefully. If you have any questions regarding this information or our privacy practices, please see the section entitled "Questions, Concerns or Complaints? Contact Us" at the end of this Privacy Policy.'},
            {text: '"Personal Data" or "personal data" means data, whether true or not, about an individual who can be identified from that data, or from that data and other information to which an organization has or is likely to have access. Common examples of personal data could include name, identification number and contact information.'},
            {text: 'By using the Services, registering for an account with us, visiting our website, or accessing the Services, you acknowledge and agree that you accept the practices, requirements, and/or policies outlined in this Privacy Policy, and you hereby consent to us collecting, using, disclosing and/or processing your personal data as described herein. IF YOU DO NOT CONSENT TO THE PROCESSING OF YOUR PERSONAL DATA AS DESCRIBED IN THIS PRIVACY POLICY, PLEASE DO NOT USE OUR SERVICES OR ACCESS OUR WEBSITE. If we change our Privacy Policy, we will post those changes or the amended Privacy Policy on our website. We reserve the right to amend this Privacy Policy at any time.'}
          ]
        },
        {
          subject: 'WHEN WILL Ten Eighteen LLC. COLLECT PERSONAL DATA?',
          contents: [
            {
              text: 'We will/may collect personal data about you:',
              descriptions: [
                'when you register and/or use our Services or Site, or open an account with us;',
                'when you submit any form, including, but not limited to, application forms or other forms relating to any of our products and services, whether online or by way of a physical form; (c) when you enter into any agreement or provide other documentation or information in respect of your interactions with us, or when you use our products and services;',
                'when you interact with us, such as via telephone calls (which may be recorded), letters, fax, face-to-face meetings, social media platforms and emails;',
                'when you use our electronic services, or interact with us via our application or use services on our website. This includes, without limitation, through cookies which we may deploy when you interact with our application or website;',
                'when you carry out transactions through our Services;',
                'when you provide us with feedback or complaints;',
                'when you register for a contest; or',
                'when you submit your personal data to us for any reason.',
              ]
            },
            {text:'The above does not purport to be exhaustive and sets out some common instances of when personal data about you may be collected.'},
            {text:'Our mobile applications may collect precise information about the location of your mobile device using technologies such as GPS, Wi-Fi, etc... We collect, use, disclose and/or process this information for one or more Purposes including, without limitation, location-based services that you request or to deliver relevant content to you based on your location or to allow you to share your location to other Users as part of the services under our mobile applications. For most mobile devices, you can withdraw your permission for us to acquire this information on your location through your device settings. If you have questions about how to disable your mobile device\'s location services, please contact your mobile device service provider or the device manufacturer.'},
          ]
        },
        {
          subject: 'WHAT PERSONAL DATA WILL Ten Eighteen LLC. COLLECT?',
          contents: [
            {text:
		            'The personal data that Ten Eighteen LLC. may collect includes but is not limited to: • name; • email address; • date of birth; • billing address; • bank account and payment information; • telephone number; • gender; • any other information about the User when the User signs up to use our Services or website, and when the User uses the Services or website, as well as information related to how the User uses our Services or website; and • aggregate data on content the User engages with.'},
            {text: 'If you do not want us to collect the aforementioned information/personal data, you may opt out at any time by notifying our Data Protection Officer in writing about it. Further information on opting out can be found in the section below entitled "How can you opt-out, remove, request access to or modify information you have provided to us?" . Note, however, that opting out of us collecting your personal data or withdrawing your consent for us to collect, use or process your personal data may affect your use of the Services. For example, opting out of the collection of location information will cause its location-based features to be disabled.'}
          ]
        },
        {
          subject: 'SETTING UP AN ACCOUNT',
          description: 'In order to use certain functionalities of the Services, you will have to create a user account which requires you to submit certain personal data. When you register and create an account, we require you to provide us with your name and mobile number as well as a username that you select. We also ask for certain information about yourself such as your telephone number, email address, shipping address, photo identification, bank account details, age, date of birth, gender, and interests. Upon activating an account, you will select a username and password. Your username and password will be used so you can securely access and maintain your account.'
        },
        {
          subject: 'VIEWING WEB PAGES',
          description: 'As with most websites, your computer sends information which may include personal data about you that gets logged by a web server when you browse our Site. This typically includes without limitation your computer\'s IP address, operating system, browser name/version, the referring web page, requested page, date/time, and sometimes a "cookie" (which can be disabled using your browser preferences) to help the site remember your last visit. If you are logged in, this information is associated with your personal account. The information is also included in anonymous statistics to allow us to understand how visitors use our site.'
        },
        {
          subject: 'COOKIES',
          contents: [
            {text: 'We may from time to time implement "cookies" or other features to allow us or third parties to collect or share information that will help us improve our Site and the Services we offer, or help us offer new services and features. “Cookies” are identifiers we transfer to your computer or mobile device that allow us to recognize your computer or device and tell us how and when the Services or website are used or visited, by how many people and to track movements within our website. We may link cookie information to personal data. Cookies also link to information regarding what items you have selected for purchase and pages you have viewed. This information is used to keep track of your shopping cart, for example. Cookies are also used to deliver content specific to your interest and to monitor website usage.'},
            {text: 'You may refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do this you may not be able to use the full functionality of our Site or the Services.'}
          ]
        },
        {
          subject: 'VIEWING AND DOWNLOADING CONTENT AND ADVERTISING',
          description: 'As with browsing web pages, when you watch content and advertising and access other software on our Site or through the Services, most of the same information is sent to us (including, without limitation, IP Address, operating system, etc.); but, instead of page views, your computer sends us information on the content, advertisement viewed and/or software installed by the Services and the website and time.'
        },
        {
          subject: 'COMMUNITY & SUPPORT',
          contents: [
            {text: 'We provide customer service support through email, SMS, and feedback forms. To provide customer support, we will ask for your email address and mobile phone number. We only use information received from customer support requests, including, without limitation, email addresses, for customer support services and we do not transfer to or share this information with any third parties.'},
            {text: 'You can also post questions and answer other User questions in our community forums. Our forum and messaging services allow you to participate in our community; to do so, we maintain information, such as your user ID, contact list and status messages. In addition, these and similar services in the future may require us to maintain your user ID and password.'},
          ]
        },
        {
          subject: 'SURVEYS',
          description: 'From time-to-time, we may request information from Users via surveys. Participation in these surveys is completely voluntary and you therefore have a choice whether to disclose your information to us. Information requested may include, without limitation, contact information (such as your email address), and demographic information (such as interests or age level). Survey information will be used for the purposes of monitoring or improving the use and satisfaction of the Services and will not be transferred to third parties, other than our contractors who help us to administer or act upon the survey.'
        },
        {
          subject: 'HOW DO WE USE THE INFORMATION YOU PROVIDE US?',
          contents: [
            {
              text: 'We may collect, use, disclose and/or process your personal data for one or more of the following purposes:',
              descriptions: [
                'to consider and/or process your application/transaction with us or your transactions or communications with third parties via the Services;',
                'to manage, operate, provide and/or administer your use of and/or access to our Services and our website, as well as your relationship and user account with us;',
                'to manage, operate, administer and provide you with as well as to facilitate the provision of our Services, including, without limitation, remembering your preferences;',
                'to tailor your experience through the Services by displaying content according to your interests and preferences, providing a faster method for you to access your account and submit information to us and allowing us to contact you, if necessary;',
                'to respond to, process, deal with or complete a transaction and/or to fulfil your requests for certain products and services and notify you of service issues and unusual account actions;',
                'to enforce our Terms of Service or any applicable end user license agreements;',
                'to protect personal safety and the rights, property or safety of others;',
                'for identification and/or verification;',
                'to maintain and administer any software updates and/or other updates and support that may be required from time to time to ensure the smooth running of our Services;',
                'to deal with or facilitate customer service, carry out your instructions, deal with or respond to any enquiries given by (or purported to be given by) you or on your behalf;',
                'to contact you or communicate with you via voice call, text message and/or fax message, email and/or postal mail or otherwise for the purposes of administering and/or managing your relationship with us or your use of our Services, such as but not limited to communicating administrative information to you relating to our Services. You acknowledge and agree that such communication by us could be by way of the mailing of correspondence, documents or notices to you, which could involve disclosure of certain personal data about you to bring about delivery of the same as well as on the external cover of envelopes/mail packages;',
                'to allow other users to interact or connect with you on the Platform, including to inform you when another User has sent you a private message or posted a comment for you on the Site;',
                'to conduct research, analysis and development activities (including, but not limited to, data analytics, surveys, product and service development and/or profiling), to analyze how you use our Services, to improve our Services or products and/or to enhance your customer experience;',
                'to allow for audits and surveys to, among other things, validate the size and composition of our target audience, and understand their experience with Ten Eighteen LLC’s Services;',
                'where you give us your prior consent, for marketing and in this regard, to send you by various modes of communication such as postal mail, email, location-based services or otherwise, marketing and promotional information and materials relating to products and/or services (including, without limitation, products and/or services of third parties whom Ten Eighteen LLC. may collaborate or tie up with) that Ten Eighteen LLC. (and/or its affiliates or related corporations) may be selling, marketing or promoting, whether such products or services exist now or are created in the future. If you are in Singapore, In the case of the sending of marketing or promotional information to you by voice call, SMS/MMS or fax to your Singapore facsimile number, we will not do so unless we have complied with the requirements of Singapore’s Privacy Laws in relation to use of such latter modes of communication in sending you marketing information or you have expressly consented to the same;',
                'to respond to legal processes or to comply with or as required by any applicable law, governmental or regulatory requirements of any relevant jurisdiction, including, without limitation, meeting the requirements to make disclosure under the requirements of any law binding on Ten Eighteen LLC. or on its related corporations or affiliates;',
                'to produce statistics and research for internal and statutory reporting and/or record-keeping requirements;',
                'to carry out due diligence or other screening activities (including, without limitation, background checks) in accordance with legal or regulatory obligations or our risk management procedures that may be required by law or that may have been put in place by us;',
                'to audit our Services or Ten Eighteen LLC’s business;',
                'to prevent or investigate any fraud, unlawful activity, omission or misconduct, whether relating to your use of our Services or any other matter arising from your relationship with us, and whether or not there is any suspicion of the aforementioned;',
                'to store, host, back up (whether for disaster recovery or otherwise) of your personal data, whether within or outside of your jurisdiction;',
                'to deal with and/or facilitate a business asset transaction or a potential business asset transaction, where such transaction involves Ten Eighteen LLC. as a participant or involves only a related corporation or affiliate of Ten Eighteen LLC. as a participant or involves Ten Eighteen LLC. and/or any one or more of Ten Eighteen LLC’s related corporations or affiliates as participant(s), and there may be other third party organizations who are participants in such transaction. A “business asset transaction” refers to the purchase, sale, lease, merger, amalgamation or any other acquisition, disposal or financing of an organization or a portion of an organization or of any of the business or assets of an organization; and/or',
                'any other purposes which we notify you of at the time of obtaining your consent. (collectively, the “Purposes”).',
              ]
            },
            {text: 'As the purposes for which we will/may collect, use, disclose or process your personal data depend on the circumstances at hand, such purpose may not appear above. However, we will notify you of such other purpose at the time of obtaining your consent, unless processing of the applicable data without your consent is permitted by the Privacy Laws.'}
          ]
        },
        {
          subject: 'SHARING OF INFORMATION FROM THE SERVICES',
          description:
	          'Our Services enable Users to share personal information with each other, in almost all occasions without Ten Eighteen LLC’s involvement, to complete transactions. In a typical transaction, Users may have access to each other’s name, user ID, email address and other contact and postage information. Our Terms of Service require that Users in possession of another User’s personal data (the “Receiving Party”) must (i) comply with all applicable Privacy Laws; (ii) allow the other User (the “Disclosing Party”) to remove him/herself from the Receiving Party’s database; and (iii) allow the Disclosing Party to review what information have been collected about them by the Receiving Party.'
        },
        {
          subject: 'HOW DOES Ten Eighteen LLC. PROTECT CUSTOMER INFORMATION?',
          description: 'We implement a variety of security measures to ensure the security of your personal data on our systems. User personal data is contained behind secured networks and is only accessible by a limited number of employees who have special access rights to such systems. We will retain personal data in accordance with the Privacy Laws and/or other applicable laws. That is, we will destroy or anonymize your personal data as soon as it is reasonable to assume that (i) the purpose for which that personal data was collected is no longer being served by the retention of such personal data; and (ii) retention is no longer necessary for any legal or business purposes. If you cease using the Site, or your permission to use the Site and/or the Services is terminated, we may continue storing, using and/or disclosing your personal data in accordance with this Privacy Policy and our obligations under the Privacy Laws. Subject to applicable law, we may securely dispose of your personal data without prior notice to you.'
        },
        {
          subject: 'DOES Ten Eighteen LLC. DISCLOSE THE INFORMATION IT COLLECTS FROM ITS VISITORS TO OUTSIDE PARTIES?',
          contents: [
            {
              text: 'In conducting our business, we will/may need to disclose your personal data to our third party service providers, agents and/or our affiliates or related corporations, and/or other third parties, whether sited in Singapore or outside of Singapore, for one or more of the above-stated Purposes. Such third party service providers, agents and/or affiliates or related corporations and/or other third parties would be processing your personal data either on our behalf or otherwise, for one or more of the above-stated Purposes. Such third parties include, without limitation:',
              descriptions: [
                'our subsidiaries, affiliates and related corporations;',
                'other users of our Platform for one or more of the above-stated Purposes;',
                'contractors, agents, service providers and other third parties we use to support our business. These include but are not limited to those which provide administrative or other services to us such as mailing houses, telecommunication companies, information technology companies and data centres;',
                'a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of Ten Eighteen LLC’s assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal data held by Ten Eighteen LLC. about our Service Users is among the assets transferred; or to a counterparty in a business asset transaction that Ten Eighteen LLC. or any of its affiliates or related corporations is involved in; and',
                'third parties to whom disclosure by us is for one or more of the Purposes and such third parties would in turn be collecting and processing your personal data for one or more of the Purposes 13.2 This may require, among other things, share statistical and demographic information about our Users and their use of the Services with suppliers of advertisements and programming. This would not include anything that could be used to identify you specifically or to discover individual information about you.',
              ]
            },
            {text: 'For the avoidance of doubt, in the event that Privacy Laws or other applicable laws permit an organization such as us to collect, use or disclose your personal data without your consent, such permission granted by the laws shall continue to apply.'},
            {text: 'Third parties may unlawfully intercept or access personal data transmitted to or contained on the site, technologies may malfunction or not work as anticipated, or someone might access, abuse or misuse information through no fault of ours. We will nevertheless deploy reasonable security arrangements to protect your personal data as required by the Privacy Laws; however there can inevitably be no guarantee of absolute security such as but not limited to when unauthorised disclosure arises from malicious and sophisticated hacking by malcontents through no fault of ours.'}
          ]
        },
        {
          subject: 'INFORMATION ON CHILDREN',
          description: 'The Services are not intended for children under the age of 13. We do not knowingly collect or maintain any personal data or non-personally-identifiable information from anyone under the age of 13 nor is any part of our Site or other Services directed to children under the age of 13. We will close any accounts used exclusively by such children and will remove and/or delete any personal data we believe was submitted by any child under the age of 13.'
        },
        {
          subject: 'INFORMATION COLLECTED BY THIRD PARTIES',
          contents: [
            {text: 'Our Site uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies, which are text files placed on your computer, to help the website analyse how Users use the Site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and Internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google\'s behalf. Google will not associate your IP address with any other data held by Google.'},
            {text:
		            'We, and third parties, may from time to time make software applications downloads available for your use on or through the Services. These applications may separately access, and allow a third party to view, your identifiable information, such as your name, your user ID, your computer\'s IP Address or other information such as any cookies that you may previously have installed or that were installed for you by a third party software application or website. Additionally, these applications may ask you to provide additional information directly to third parties. Third party products or services provided through these applications are not owned or controlled by Ten Eighteen LLC. You are encouraged to read the terms and other policies published by such third parties on their websites or otherwise.'}
          ]
        },
        {
          subject: 'DISCLAIMER REGARDING SECURITY AND THIRD PARTY SITES',
          contents: [
            {text: 'WE DO NOT GUARANTEE THE SECURITY OF PERSONAL DATA AND/OR OTHER INFORMATION THAT YOU PROVIDE ON THIRD PARTY SITES. We do implement a variety of security measures to maintain the safety of your personal data that is in our possession or under our control. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the personal data confidential. When you place orders or access your personal data, we offer the use of a secure server. All personal data or sensitive information you supply is encrypted into our databases to be only accessed as stated above.'},
            {text: 'In an attempt to provide you with increased value, we may choose various third party websites to link to, and frame within, the Site. We may also participate in co-branding and other relationships to offer e-commerce and other services and features to our visitors. These linked sites have separate and independent privacy policies as well as security arrangements. Even if the third party is affiliated with us, we have no control over these linked sites, each of which has separate privacy and data collection practices independent of us. Data collected by our co-brand partners or third party web sites (even if offered on or through our Site) may not be received by us.'},
            {text: 'We therefore have no responsibility or liability for the content, security arrangements (or lack thereof) and activities of these linked sites. These linked sites are only for your convenience and you therefore access them at your own risk. Nonetheless, we seek to protect the integrity of our Site and the links placed upon each of them and therefore welcome any feedback about these linked sites (including, without limitation, if a specific link does not work).'}
          ]
        },
        {
          subject: 'WILL Ten Eighteen LLC. TRANSFER YOUR INFORMATION OVERSEAS?',
          description:
	          'Your personal data and/or information may be transferred to, stored or processed outside of your country. In most cases, your personal data will be processed in Singapore, where our servers are located and our central database is operated. Ten Eighteen LLC. will only transfer your information overseas in accordance with Privacy Laws.'
        },
        {
          subject: 'HOW CAN YOU OPT-OUT, REMOVE, REQUEST ACCESS TO OR MODIFY INFORMATION YOU HAVE PROVIDED TO US?',
          contents: [
            {
              text: 'Opting Out and Withdrawing Consent',
              descriptions: [
                'To modify your email subscriptions, please let us know by sending an email to our Personal Data Protection Officer at the address listed below. Please note that due to email production schedules, you may still receive emails that are already in production.',
                'You may withdraw your consent for the collection, use and/or disclosure of your personal data in our possession or under our control by sending an email to our Personal Data Protection Officer at the email address listed below in Section 19.2.',
                'Once we have your clear withdrawal instructions and verified your identity, we will process your request for withdrawal of consent, and will thereafter not collect, use and/or disclose your personal data in the manner stated in your request. If we are unable to verify your identity or understand your instructions, we will liaise with you to understand your request.',
                'However, your withdrawal of consent could result in certain legal consequences arising from such withdrawal. In this regard, depending on the extent of your withdrawal of consent for us to process your personal data, it may mean that we will not be able to continue providing the Services to you, we may need to terminate your existing relationship and/or the contract you have with us, etc., as the case may be, which we will inform you of.',
              ]
            },
            {
              text: 'Requesting Access and/or Correction of Personal Data',
              descriptions: [
                'If you have an account with us, you may personally access and/or correct your personal data currently in our possession or control through the Account Settings page on the Site. If you do not have an account with us, you may request to access and/or correct your personal data currently in our possession or control by submitting a written request to us. We will need enough information from you in order to ascertain your identity as well as the nature of your request so as to be able to deal with your request. Hence, please submit your written request by sending an email to our Personal Data Protection Officer at the email address listed below in Section 19.2.',
                'For a request to access personal data, once we have sufficient information from you to deal with the request, we will seek to provide you with the relevant personal data within 30 days (or, if you are resident in Malaysia, 21 days). Where we are unable to respond to you within the said 30 days (or, if you are resident in Malaysia, 21 days), we will notify you of the soonest possible time within which we can provide you with the information requested. Note that Privacy Laws may exempt certain types of personal data from being subject to your access request.',
                {
                  description: 'For a request to correct personal data, once we have sufficient information from you to deal with the request, we will:',
                  details: [
                    'correct your personal data within 30 days (or, if you are resident in Malaysia, 21 days). Where we are unable to do so within the said period, we will notify you of the soonest practicable time within which we can make the correction. Note that Privacy Laws may exempt certain types of personal data from being subject to your correction request as well as provides for situation(s) when correction need not be made by us despite your request; and',
                    'we will send the corrected personal data to every other organization to which the personal data was disclosed by us within a year before the date the correction was made, unless that other organization does not need the corrected personal data for any legal or business purpose.'
                  ]
                } ,
                'Notwithstanding sub-paragraph (b) immediately above, we may, if you so request, send the corrected personal data only to specific organizations to which the personal data was disclosed by us within a year before the date the correction was made.',
                'We will/may also be charging you a reasonable fee for the handling and processing of your requests to access your personal data. If we so choose to charge, we will provide you with a written estimate of the fee we will be charging. Please note that we are not required to respond to or deal with your access request unless you have agreed to pay the fee.',
                'We reserve the right to refuse to correct your personal data in accordance with the provisions as set out in Privacy Laws, where they require and/or entitle an organization to refuse to correct personal data in stated circumstances.'
              ]
            }
          ]
        },
        {
          subject: 'QUESTIONS, CONCERNS OR COMPLAINTS? CONTACT US',
          contents: [
            {text:
		            'If you have any questions or concerns about our privacy practices or your dealings with the Services, please do not hesitate to contact:info@teneighteen.biz.'},
            {text:
		            'If you have any complaint or grievance regarding how we are handling your personal data or about how we are complying with Privacy Laws, we welcome you to contact us with your complaint or grievance. Please contact us through email with your complaint or grievance: E-mail: info@teneighteen.biz and Attention it to the "Personal Data Protection Officer". Please send all legal notices to info@teneighteen.biz and Attention it to the “General Counsel”.'},
            {text: 'Where it is an email or a letter through which you are submitting a complaint, your indication at the subject header that it is a Privacy Law complaint would assist us in attending to your complaint speedily by passing it on to the relevant staff in our organization to handle. For example, you could insert the subject header as “Privacy Complaint”. We will certainly strive to deal with any complaint or grievance that you may have fairly and as soon as possible.'}
          ]
        },
        {
          subject: 'TERMS AND CONDITIONS',
          description: 'Please also read the Terms of Service establishing the use, disclaimers, and limitations of liability governing the use of the Site and the Services and other related policies. '
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
