import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const IssueNavbar = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Button>Default</Button>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Button isPrimary>Primary</Button>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Button isBasic>Basic</Button>
    </Grid.Col>
  </Grid.Row>
);

export default IssueNavbar;