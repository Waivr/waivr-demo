import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '@mui/material';

export const TypographySamples = () => (
  <div>
    <Typography variant="h1">h1</Typography>
    <Typography variant="h2">h2</Typography>
    <Typography variant="h3">h3</Typography>
    <Typography variant="h4">h4</Typography>
    <Typography variant="h5">h5</Typography>
    <Typography variant="h6">h6</Typography>

    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="subtitle2">subtitle2</Typography>

    <Typography variant="body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum
      dolor iste libero assumenda earum aliquam nihil at, quibusdam adipisci
      nostrum deserunt error illum labore autem voluptatum eius esse laborum!
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde eos
      possimus. Cumque consequatur, necessitatibus laboriosam eaque obcaecati
      dicta assumenda! Molestiae similique ullam velit fuga vitae minima nisi
      dolore amet.
    </Typography>
  </div>
);

export default {
  title: 'Components/Typography',
  component: TypographySamples,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof TypographySamples>;

const Template: ComponentStory<typeof TypographySamples> = () => (
  <TypographySamples />
);

export const AccountSelectionPane = Template.bind({});
AccountSelectionPane.args = {};
