import type { INodeProperties } from 'n8n-workflow';

export const generationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					]
				}
			},
			"options": [
				{
					"name": "GET Pirate Generate Insult",
					"value": "GET Pirate Generate Insult",
					"action": "GET Pirate Generate Insult",
					"description": "Generate random pirate insults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pirate/generate/insult"
						}
					}
				},
				{
					"name": "GET Pirate Generate Lorem Ipsum",
					"value": "GET Pirate Generate Lorem Ipsum",
					"action": "GET Pirate Generate Lorem Ipsum",
					"description": "Generate pirate lorem ipsum.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pirate/generate/lorem-ipsum"
						}
					}
				},
				{
					"name": "GET Pirate Generate Name",
					"value": "GET Pirate Generate Name",
					"action": "GET Pirate Generate Name",
					"description": "Generate random pirate names.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pirate/generate/name"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pirate/generate/insult",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Insult"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "No of insults to generate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Insult"
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
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Insult"
					]
				}
			}
		},
		{
			"displayName": "GET /pirate/generate/lorem-ipsum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Lorem Ipsum"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Type of element to generate `paragraphs/sentences/words`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Lorem Ipsum"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "No of elements to generate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Lorem Ipsum"
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
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Lorem Ipsum"
					]
				}
			}
		},
		{
			"displayName": "GET /pirate/generate/name",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Name"
					]
				}
			}
		},
		{
			"displayName": "Variation",
			"name": "variation",
			"description": "Variation to generate `male/female`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "variation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Name"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "No of names to generate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Name"
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
						"Generation"
					],
					"operation": [
						"GET Pirate Generate Name"
					]
				}
			}
		},
];
