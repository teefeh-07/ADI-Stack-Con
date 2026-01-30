
import { ChainhooksClient } from '@hirosystems/chainhooks-client';

export const chainhookClient = new ChainhooksClient({
    url: 'http://localhost:20456', 
    apiKey: 'dev-api-key' 
});
        