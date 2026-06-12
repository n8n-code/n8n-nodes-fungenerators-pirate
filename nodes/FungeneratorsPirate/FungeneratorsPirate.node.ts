import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generationDescription } from './resources/generation';
import { translationDescription } from './resources/translation';

export class FungeneratorsPirate implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fungenerators Pirate',
                name: 'N8nDevFungeneratorsPirate',
                icon: { light: 'file:./fungenerators-pirate.svg', dark: 'file:./fungenerators-pirate.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Generate pirate names, insults, filler text, and translate to pirate lingo.',
                defaults: { name: 'Fungenerators Pirate' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFungeneratorsPirateApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Generation",
					"value": "Generation",
					"description": "Generate names, insults, lorem ipsum etc"
				},
				{
					"name": "Translation",
					"value": "Translation",
					"description": "Translate to pirate lingo"
				}
			],
			"default": ""
		},
		...generationDescription,
		...translationDescription
                ],
        };
}
