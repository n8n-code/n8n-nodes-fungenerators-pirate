import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FungeneratorsPirateApi implements ICredentialType {
        name = 'N8nDevFungeneratorsPirateApi';

        displayName = 'Fungenerators Pirate API';

        icon: Icon = { light: 'file:../nodes/FungeneratorsPirate/fungenerators-pirate.svg', dark: 'file:../nodes/FungeneratorsPirate/fungenerators-pirate.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://api.fungenerators.com',
                        required: true,
                        placeholder: 'http://api.fungenerators.com',
                        description: 'The base URL of your Fungenerators Pirate API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Fungenerators-Api-Secret': '={{$credentials.apiKey}}',
                        },
                },
        };


}
