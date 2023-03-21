import { PricingProps } from '.';

export const args: PricingProps = {
  component: 'section.section-pricing',
  title: 'pricing',
  description_one:
    'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.',
  description_two:
    'We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.',
  sectionId: 'pricing',
  background: false,
  table: [
    {
      head: 'title 1',
      body: 'content1',
      footer: 'footer 1',
    },
    {
      head: 'title 2',
      body: 'content2',
      footer: 'footer 2',
    },
    {
      head: 'title 3',
      body: 'content3',
      footer: 'footer 3',
    },
    {
      head: 'title 4',
      body: 'content4',
      footer: 'footer 4',
    },
    {
      head: 'title 5',
      body: 'content5',
      footer: 'footer 5',
    },
  ],
};
