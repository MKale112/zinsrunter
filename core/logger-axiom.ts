// logger.js
import { Client } from '@axiomhq/axiom-node';

const axiom = new Client({ token: 'xaat-8a452859-5c53-4238-88f1-da18518cb1a8', orgId: 'zins-runter-k4ae' });

export default async function logEvent() {
  await axiom.ingestEvents('', []);
}
