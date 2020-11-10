<template>
  <main class='main'>
    <FAQ />
  </main>
</template>

<script>
import FAQ from '@/components/FAQ';
export default {
  name: 'main-faq',
  components: {
    FAQ
  },
  data() {
    return {
      title: 'Mad Devs: Frequently Asked Questions',
      description: 'FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.',
      ogUrl: 'https://maddevs.io/faq'
    };
  },
  head() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How‌ ‌many‌ ‌people‌ ‌work‌ ‌at‌ ‌your‌ ‌company?‌ ‌ ',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mad Devs currently is a 120+ person strong team of rock stars who are on a mission to deliver value to long-term projects. '
          }
        },
        {
          '@type': 'Question',
          'name': 'What time zone does your team operate in?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We generally work in +6 and +3 UTC from 9 AM to 6 PM, but we have early birds and night owls allowing us to adjust to customers from the US, the UK, South East Asia, and Oceania.Our development workflows are devised around asynchronous communication, leveraging automatic reporting drilled down to every task instance or team member. Daily standups, work logs, and all-hands meetings or video calls keep everybody on the same page. '
          }
        },
        {
          '@type': 'Question',
          'name': 'What types of projects you do NOT work on?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mad Devs workflow is dedicated to the creation and maintenance of high-quality, scalable systems intended for heavy workloads. We can’t help with requests for landing pages and ultra-fast MVPs. '
          }
        },
        {
          '@type': 'Question',
          'name': 'Where can I find the project portfolio of your company? ',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Since 2016, our team has delivered to customers 50+ projects in FinTech, Transportation, HealthTech, AdTech, EdTech, and E-commerce industries.The Mad Devs team has worked with Clutch.co, Teacherly, Guardrails, GoDee, Sir John Monash Centre, Eatigo, Alfabank, Admitad, Triggermesh, and many other companies ensuring that hundreds of thousands of people enjoy apps and services they use on a daily basis.We cannot disclose details for ~40% of our customers as we need to comply with the terms of NDAs.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What details do you need from me to discuss my project & start work? ',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Simply submit your project idea to us via our contact form. We will contact you to clarify further requirements and prepare the project time & cost estimates. For more details, you can get in touch with our delivery manager Tamara Mun: tamaramun@maddevs.io, or schedule a meeting at calendly/mun_tamara. '
          }
        },
        {
          '@type': 'Question',
          'name': 'How much does software development cost? How do you charge? ',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Our pricing has always been transparent. We charge our customers on a ‘Time & Material’ basis which makes the costs predictable as there are known rates for each specialist, from developer to PM. This ensures great control over budget and provides the required level of flexibility as the projects’ scope can be easily corrected on the go. Thus, in the end, together we deliver a product that truly solves end-customers’ needs. '
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I control my project budget? ',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You will have full control over your budget with our detailed monthly invoice. Weekly and daily reports cover the team’s contribution to your project in addition to individual performance reports that tell you what each of the specialists you hired has accomplished. Thus, with all information in your hands, the right adjustments in priorities of cost control factors can be implemented.  '
          }
        },
        {
          '@type': 'Question',
          'name': 'How do you ensure security for confidential information? Do you work under NDA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mad Devs always works under the NDA of our own, however, if you have a non-disclosure agreement on your side, we can consider your contract, too. Please read more about work under NDA in the corresponding section of our website: https://maddevs.io/nda/'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do you mitigate the risks related to intellectual property ownership?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Intellectual Property is wholly owned by you and your company. \nAfter you sign a contract with us, you will become the owner of the repository, the project environment, Slack, hosting, and etc. The team only manages this and adjusts the processes in accordance with the regulations of the company. You have these accesses from the very beginning of the project, but it is important to remember that according to the contract you become a full owner only after paying for all the hours worked by the team. '
          }
        },
        {
          '@type': 'Question',
          'name': 'What if my question is not answered on this page? ',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Please don’t hesitate to contact us directly with any questions you may have. You have a number of options to use: Live chat\nDirect mail to our Delivery Manager Tamara Mun via tamaramun@maddevs.io\nContact form\nPhone Call via +44 20 3984 8555\nText message via Facebook Messenger, Telegram, Whatsapp, or WeChat.'
          }
        }
      ]
    };
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          json: structuredData
        }
      ]
    };
  }
};
</script>
