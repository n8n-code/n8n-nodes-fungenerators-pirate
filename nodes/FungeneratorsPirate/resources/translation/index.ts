import type { INodeProperties } from 'n8n-workflow';

export const translationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					]
				}
			},
			"options": [
				{
					"name": "GET Pirate Translate",
					"value": "GET Pirate Translate",
					"action": "GET Pirate Translate",
					"description": "Translate from English to pirate.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pirate/translate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pirate/translate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					],
					"operation": [
						"GET Pirate Translate"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"required": true,
			"description": "Text to translate to pirate lingo.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					],
					"operation": [
						"GET Pirate Translate"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					],
					"operation": [
						"GET Pirate Translate"
					]
				}
			}
		},
];
