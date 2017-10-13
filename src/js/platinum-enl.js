// Dummy Repsone for Testing

export default {
    "status": {
        "code": "00000",
        "shortDesc": "SUCCESS",
        "detailDesc": ""
    },
    "query": {
        "criterion": {
            "recepientIdentifiers": {
                "identifier": [
                    {
                        "identifier": {
                            "value": "71bfd1490bd372c65fa8e5dd0b5743a01fdef94fb2339d6e3cb57eb7f42c2062"
                        },
                        "idType": "emailID"
                    },
                    {
                        "identifier": {
                            "value": "XOO17700752755"
                        },
                        "idType": "RSVPNo"
                    }
                ]
            },
            "requestedInformationType": "RealtimeOffers"
        },
        "filters": {
            "location": {
                "pivotLocation": {
                    "locationAddress": {
                        "addressLines": {
                            "addressLine": [
                                {},
                                {}
                            ]
                        },
                        "city": "ASTORIA",
                        "state": "NY",
                        "zip": {
                            "zipCore": "11103"
                        },
                        "country": "US",
                        "geoCoordinate": {}
                    },
                    "accountHoldersAddressType": "Billing"
                }
            },
            "targetDevice": {
                "type": "iPHONE",
                "OS": "AppleIOS",
                "OSVersion": "5.0"
            },
            "requestTime": {
                "requestTime": 1507091410414,
                "timeZone": "MST"
            }
        },
        "pagination": {
            "offset": 0,
            "limit": 3
        }
    },
    "recepientDisplayDetails": {
        "lastName": "BLANK",
        "firstName": "JAMES",
        "middleName": "D",
        "suffix": "",
        "accountDisplaySummaryDetails": {
            "lastFiveDigitsOfCardNumber": "81003",
            "cardType": "Platinum CardÂ®"
        }
    },
    "multiselect": {
        "multiSelectDataList": [
            {
                "type": 1012,
                "typeName": "Centurion Lounge Visits",
                "data": {
                    "number_of_visits": "2",
                    "time_of_visit": "06.04.36",
                    "visit_date": "2017-07-01",
                    "airport_code": "LGA"
                },
                "status": 200,
                "message": ""
            },
            {
                "type": 1014,
                "typeName": "Airline Fee Credit",
                "data": {
                    "status": {
                        "code": "0",
                        "user_message": "success",
                        "developer_message": "success. data returned from  data service"
                    },
                    "airline_fee_credit_summary": {
                        "card_nbr": "373909316881003",
                        "promo_program_id": "BEQ013661",
                        "annual_summary": [
                            {
                                "period": {
                                    "period_id": "292512017",
                                    "start_dt": "01/01/2017",
                                    "end_dt": "12/31/2017"
                                },
                                "cap_amt": {
                                    "value": "200",
                                    "currency_cd": "USD",
                                    "currency_desc": "US Dollar"
                                },
                                "available_amt": {
                                    "value": "100",
                                    "currency_cd": "USD",
                                    "currency_desc": "US Dollar"
                                },
                                "claimed_amt": {
                                    "value": "100",
                                    "currency_cd": "USD",
                                    "currency_desc": "US Dollar"
                                }
                            }
                        ]
                    }
                },
                "status": 200,
                "message": "SUPPRESS"
            },
            {
                "type": 1013,
                "typeName": "Uber Benefits Usage",
                "data": [
                    {
                        "id": "5349a84f-95bd-5f08-e053-1ca8160a7071",
                        "benefitId": "463a1a1d-3330-6d36-e053-3f64160a631d",
                        "card": {
                            "cardNumber": "373909316881003"
                        },
                        "timestamp": {
                            "chronology": {
                                "zone": {
                                    "fixed": true,
                                    "id": "UTC"
                                }
                            },
                            "era": 1,
                            "centuryOfEra": 20,
                            "yearOfEra": 2017,
                            "yearOfCentury": 17,
                            "year": 2017,
                            "weekyear": 2017,
                            "monthOfYear": 7,
                            "weekOfWeekyear": 26,
                            "dayOfYear": 182,
                            "dayOfMonth": 1,
                            "dayOfWeek": 6,
                            "hourOfDay": 0,
                            "minuteOfHour": 18,
                            "secondOfMinute": 10,
                            "millisOfSecond": 0,
                            "millisOfDay": 1090000,
                            "fieldTypes": [
                                {
                                    "durationType": {
                                        "name": "years"
                                    },
                                    "name": "year"
                                },
                                {
                                    "durationType": {
                                        "name": "months"
                                    },
                                    "rangeDurationType": {
                                        "name": "years"
                                    },
                                    "name": "monthOfYear"
                                },
                                {
                                    "durationType": {
                                        "name": "days"
                                    },
                                    "rangeDurationType": {
                                        "name": "months"
                                    },
                                    "name": "dayOfMonth"
                                },
                                {
                                    "durationType": {
                                        "name": "millis"
                                    },
                                    "rangeDurationType": {
                                        "name": "days"
                                    },
                                    "name": "millisOfDay"
                                }
                            ],
                            "fields": [
                                {
                                    "lenient": false,
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": -292275054,
                                    "maximumValue": 292278993,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "years"
                                        },
                                        "name": "year"
                                    },
                                    "name": "year",
                                    "supported": true
                                },
                                {
                                    "lenient": false,
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 12,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "months"
                                        },
                                        "rangeDurationType": {
                                            "name": "years"
                                        },
                                        "name": "monthOfYear"
                                    },
                                    "name": "monthOfYear",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 31,
                                    "lenient": false,
                                    "durationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "unitMillis": 86400000,
                                    "type": {
                                        "durationType": {
                                            "name": "days"
                                        },
                                        "rangeDurationType": {
                                            "name": "months"
                                        },
                                        "name": "dayOfMonth"
                                    },
                                    "name": "dayOfMonth",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "maximumValue": 86399999,
                                    "range": 86400000,
                                    "lenient": false,
                                    "durationField": {
                                        "type": {
                                            "name": "millis"
                                        },
                                        "name": "millis",
                                        "supported": true,
                                        "precise": true,
                                        "unitMillis": 1
                                    },
                                    "minimumValue": 0,
                                    "unitMillis": 1,
                                    "type": {
                                        "durationType": {
                                            "name": "millis"
                                        },
                                        "rangeDurationType": {
                                            "name": "days"
                                        },
                                        "name": "millisOfDay"
                                    },
                                    "name": "millisOfDay",
                                    "supported": true
                                }
                            ],
                            "values": [
                                2017,
                                7,
                                1,
                                1090000
                            ]
                        },
                        "quantity": {
                            "unit": "USD",
                            "type": "CURRENCY",
                            "amount": 6.59
                        },
                        "context": {
                            "remainingCredit": {
                                "unit": "USD",
                                "type": "CURRENCY",
                                "amount": 8.41
                            }
                        }
                    },
                    {
                        "id": "5371e3c4-d91a-028c-e053-1ba8160a1c55",
                        "benefitId": "463a1a1d-3330-6d36-e053-3f64160a631d",
                        "card": {
                            "cardNumber": "373909316881003"
                        },
                        "timestamp": {
                            "chronology": {
                                "zone": {
                                    "fixed": true,
                                    "id": "UTC"
                                }
                            },
                            "era": 1,
                            "centuryOfEra": 20,
                            "yearOfEra": 2017,
                            "yearOfCentury": 17,
                            "year": 2017,
                            "weekyear": 2017,
                            "monthOfYear": 7,
                            "weekOfWeekyear": 27,
                            "dayOfYear": 184,
                            "dayOfMonth": 3,
                            "dayOfWeek": 1,
                            "hourOfDay": 2,
                            "minuteOfHour": 24,
                            "secondOfMinute": 8,
                            "millisOfSecond": 0,
                            "millisOfDay": 8648000,
                            "fieldTypes": [
                                {
                                    "durationType": {
                                        "name": "years"
                                    },
                                    "name": "year"
                                },
                                {
                                    "durationType": {
                                        "name": "months"
                                    },
                                    "rangeDurationType": {
                                        "name": "years"
                                    },
                                    "name": "monthOfYear"
                                },
                                {
                                    "durationType": {
                                        "name": "days"
                                    },
                                    "rangeDurationType": {
                                        "name": "months"
                                    },
                                    "name": "dayOfMonth"
                                },
                                {
                                    "durationType": {
                                        "name": "millis"
                                    },
                                    "rangeDurationType": {
                                        "name": "days"
                                    },
                                    "name": "millisOfDay"
                                }
                            ],
                            "fields": [
                                {
                                    "lenient": false,
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": -292275054,
                                    "maximumValue": 292278993,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "years"
                                        },
                                        "name": "year"
                                    },
                                    "name": "year",
                                    "supported": true
                                },
                                {
                                    "lenient": false,
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 12,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "months"
                                        },
                                        "rangeDurationType": {
                                            "name": "years"
                                        },
                                        "name": "monthOfYear"
                                    },
                                    "name": "monthOfYear",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 31,
                                    "lenient": false,
                                    "durationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "unitMillis": 86400000,
                                    "type": {
                                        "durationType": {
                                            "name": "days"
                                        },
                                        "rangeDurationType": {
                                            "name": "months"
                                        },
                                        "name": "dayOfMonth"
                                    },
                                    "name": "dayOfMonth",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "maximumValue": 86399999,
                                    "range": 86400000,
                                    "lenient": false,
                                    "durationField": {
                                        "type": {
                                            "name": "millis"
                                        },
                                        "name": "millis",
                                        "supported": true,
                                        "precise": true,
                                        "unitMillis": 1
                                    },
                                    "minimumValue": 0,
                                    "unitMillis": 1,
                                    "type": {
                                        "durationType": {
                                            "name": "millis"
                                        },
                                        "rangeDurationType": {
                                            "name": "days"
                                        },
                                        "name": "millisOfDay"
                                    },
                                    "name": "millisOfDay",
                                    "supported": true
                                }
                            ],
                            "values": [
                                2017,
                                7,
                                3,
                                8648000
                            ]
                        },
                        "quantity": {
                            "unit": "USD",
                            "type": "CURRENCY",
                            "amount": 15
                        },
                        "context": {
                            "remainingCredit": {
                                "unit": "USD",
                                "type": "CURRENCY",
                                "amount": 0
                            }
                        }
                    },
                    {
                        "id": "58755c5d-d5f8-f2be-e053-1ca8160a315a",
                        "benefitId": "463a1a1d-3330-6d36-e053-3f64160a631d",
                        "card": {
                            "cardNumber": "373909316881003"
                        },
                        "timestamp": {
                            "chronology": {
                                "zone": {
                                    "fixed": true,
                                    "id": "UTC"
                                }
                            },
                            "era": 1,
                            "centuryOfEra": 20,
                            "yearOfEra": 2017,
                            "yearOfCentury": 17,
                            "year": 2017,
                            "weekyear": 2017,
                            "monthOfYear": 9,
                            "weekOfWeekyear": 36,
                            "dayOfYear": 248,
                            "dayOfMonth": 5,
                            "dayOfWeek": 2,
                            "hourOfDay": 1,
                            "minuteOfHour": 14,
                            "secondOfMinute": 40,
                            "millisOfSecond": 0,
                            "millisOfDay": 4480000,
                            "fieldTypes": [
                                {
                                    "durationType": {
                                        "name": "years"
                                    },
                                    "name": "year"
                                },
                                {
                                    "durationType": {
                                        "name": "months"
                                    },
                                    "rangeDurationType": {
                                        "name": "years"
                                    },
                                    "name": "monthOfYear"
                                },
                                {
                                    "durationType": {
                                        "name": "days"
                                    },
                                    "rangeDurationType": {
                                        "name": "months"
                                    },
                                    "name": "dayOfMonth"
                                },
                                {
                                    "durationType": {
                                        "name": "millis"
                                    },
                                    "rangeDurationType": {
                                        "name": "days"
                                    },
                                    "name": "millisOfDay"
                                }
                            ],
                            "fields": [
                                {
                                    "lenient": false,
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": -292275054,
                                    "maximumValue": 292278993,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "years"
                                        },
                                        "name": "year"
                                    },
                                    "name": "year",
                                    "supported": true
                                },
                                {
                                    "lenient": false,
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 12,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "months"
                                        },
                                        "rangeDurationType": {
                                            "name": "years"
                                        },
                                        "name": "monthOfYear"
                                    },
                                    "name": "monthOfYear",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 31,
                                    "lenient": false,
                                    "durationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "unitMillis": 86400000,
                                    "type": {
                                        "durationType": {
                                            "name": "days"
                                        },
                                        "rangeDurationType": {
                                            "name": "months"
                                        },
                                        "name": "dayOfMonth"
                                    },
                                    "name": "dayOfMonth",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "maximumValue": 86399999,
                                    "range": 86400000,
                                    "lenient": false,
                                    "durationField": {
                                        "type": {
                                            "name": "millis"
                                        },
                                        "name": "millis",
                                        "supported": true,
                                        "precise": true,
                                        "unitMillis": 1
                                    },
                                    "minimumValue": 0,
                                    "unitMillis": 1,
                                    "type": {
                                        "durationType": {
                                            "name": "millis"
                                        },
                                        "rangeDurationType": {
                                            "name": "days"
                                        },
                                        "name": "millisOfDay"
                                    },
                                    "name": "millisOfDay",
                                    "supported": true
                                }
                            ],
                            "values": [
                                2017,
                                9,
                                5,
                                4480000
                            ]
                        },
                        "quantity": {
                            "unit": "USD",
                            "type": "CURRENCY",
                            "amount": 8.58
                        },
                        "context": {
                            "remainingCredit": {
                                "unit": "USD",
                                "type": "CURRENCY",
                                "amount": 6.42
                            }
                        }
                    },
                    {
                        "id": "5875d9f9-f539-4561-e053-1ba8160a53e6",
                        "benefitId": "463a1a1d-3330-6d36-e053-3f64160a631d",
                        "card": {
                            "cardNumber": "373909316881003"
                        },
                        "timestamp": {
                            "chronology": {
                                "zone": {
                                    "fixed": true,
                                    "id": "UTC"
                                }
                            },
                            "era": 1,
                            "centuryOfEra": 20,
                            "yearOfEra": 2017,
                            "yearOfCentury": 17,
                            "year": 2017,
                            "weekyear": 2017,
                            "monthOfYear": 9,
                            "weekOfWeekyear": 36,
                            "dayOfYear": 248,
                            "dayOfMonth": 5,
                            "dayOfWeek": 2,
                            "hourOfDay": 1,
                            "minuteOfHour": 23,
                            "secondOfMinute": 24,
                            "millisOfSecond": 0,
                            "millisOfDay": 5004000,
                            "fieldTypes": [
                                {
                                    "durationType": {
                                        "name": "years"
                                    },
                                    "name": "year"
                                },
                                {
                                    "durationType": {
                                        "name": "months"
                                    },
                                    "rangeDurationType": {
                                        "name": "years"
                                    },
                                    "name": "monthOfYear"
                                },
                                {
                                    "durationType": {
                                        "name": "days"
                                    },
                                    "rangeDurationType": {
                                        "name": "months"
                                    },
                                    "name": "dayOfMonth"
                                },
                                {
                                    "durationType": {
                                        "name": "millis"
                                    },
                                    "rangeDurationType": {
                                        "name": "days"
                                    },
                                    "name": "millisOfDay"
                                }
                            ],
                            "fields": [
                                {
                                    "lenient": false,
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": -292275054,
                                    "maximumValue": 292278993,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "years"
                                        },
                                        "name": "year"
                                    },
                                    "name": "year",
                                    "supported": true
                                },
                                {
                                    "lenient": false,
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 31556952000,
                                        "type": {
                                            "name": "years"
                                        },
                                        "name": "years",
                                        "supported": true
                                    },
                                    "leapDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 12,
                                    "durationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "type": {
                                        "durationType": {
                                            "name": "months"
                                        },
                                        "rangeDurationType": {
                                            "name": "years"
                                        },
                                        "name": "monthOfYear"
                                    },
                                    "name": "monthOfYear",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": false,
                                        "unitMillis": 2629746000,
                                        "type": {
                                            "name": "months"
                                        },
                                        "name": "months",
                                        "supported": true
                                    },
                                    "minimumValue": 1,
                                    "maximumValue": 31,
                                    "lenient": false,
                                    "durationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "unitMillis": 86400000,
                                    "type": {
                                        "durationType": {
                                            "name": "days"
                                        },
                                        "rangeDurationType": {
                                            "name": "months"
                                        },
                                        "name": "dayOfMonth"
                                    },
                                    "name": "dayOfMonth",
                                    "supported": true
                                },
                                {
                                    "rangeDurationField": {
                                        "precise": true,
                                        "unitMillis": 86400000,
                                        "type": {
                                            "name": "days"
                                        },
                                        "name": "days",
                                        "supported": true
                                    },
                                    "maximumValue": 86399999,
                                    "range": 86400000,
                                    "lenient": false,
                                    "durationField": {
                                        "type": {
                                            "name": "millis"
                                        },
                                        "name": "millis",
                                        "supported": true,
                                        "precise": true,
                                        "unitMillis": 1
                                    },
                                    "minimumValue": 0,
                                    "unitMillis": 1,
                                    "type": {
                                        "durationType": {
                                            "name": "millis"
                                        },
                                        "rangeDurationType": {
                                            "name": "days"
                                        },
                                        "name": "millisOfDay"
                                    },
                                    "name": "millisOfDay",
                                    "supported": true
                                }
                            ],
                            "values": [
                                2017,
                                9,
                                5,
                                5004000
                            ]
                        },
                        "quantity": {
                            "unit": "USD",
                            "type": "CURRENCY",
                            "amount": 2
                        },
                        "context": {
                            "remainingCredit": {
                                "unit": "USD",
                                "type": "CURRENCY",
                                "amount": 4.42
                            }
                        }
                    }
                ],
                "status": 200,
                "message": ""
            },
            {
                "type": 1008,
                "typeName": "Merchant Recommendations",
                "data": [
                    {
                        "merchantRecommendationInfo": {
                            "merchantSENumber": "6318150810",
                            "recommendationRank": 1,
                            "merchantName": "SWEET AFTON",
                            "thirdpartyLink": "http://www.tripadvisor.com/https//www.tripadvisor.com/Restaurant_Review-g48080-d1524697-Reviews-m17463-Sweet_Afton-Long_Island_City_Queens_New_York.html",
                            "memberFavoriteIndicator": "N",
                            "newMerchantIndicator": "N",
                            "merchantURL": "http://www.sweetaftonbar.com",
                            "reasonDesc": "You've been to places like this",
                            "merchantRating": 4,
                            "reviewCount": 39,
                            "RecommendationType": "PERSONALIZED",
                            "DigitalRecoLocationList": {
                                "DigitalRecoLocation": [
                                    {
                                        "digitalRecoAddressDef": {
                                            "StreetAddressLine1DS": "3009 34TH ST",
                                            "CityNM": "ASTORIA",
                                            "StateNM": "NY",
                                            "AddrPostalCd": "11103",
                                            "Phone": "7187772570"
                                        },
                                        "LocSENo": "6318150810"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "merchantRecommendationInfo": {
                            "merchantSENumber": "6318065380",
                            "recommendationRank": 2,
                            "merchantName": "BAREBURGER",
                            "thirdpartyLink": "http://www.tripadvisor.com/https//www.tripadvisor.com/Restaurant_Review-g29837-d3244293-Reviews-m17463-Bareburger-Astoria_New_York.html",
                            "memberFavoriteIndicator": "N",
                            "newMerchantIndicator": "N",
                            "merchantURL": "https://bareburger.com",
                            "reasonDesc": "Card Members who spend like you frequent this business",
                            "merchantRating": 4.5,
                            "reviewCount": 73,
                            "RecommendationType": "PERSONALIZED",
                            "DigitalRecoLocationList": {
                                "DigitalRecoLocation": [
                                    {
                                        "digitalRecoAddressDef": {
                                            "StreetAddressLine1DS": "3321 31ST AVE",
                                            "CityNM": "ASTORIA",
                                            "StateNM": "NY",
                                            "AddrPostalCd": "11106-1430",
                                            "Phone": "7187777011"
                                        },
                                        "LocSENo": "6318065380"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "merchantRecommendationInfo": {
                            "merchantSENumber": "1313712770",
                            "recommendationRank": 3,
                            "merchantName": "THE BONNIE",
                            "thirdpartyLink": "http://www.tripadvisor.com/https//www.tripadvisor.com/Restaurant_Review-g616325-d8657732-Reviews-m17463-The_Bonnie-Queens_New_York.html",
                            "memberFavoriteIndicator": "Y",
                            "newMerchantIndicator": "N",
                            "merchantURL": "http://www.thebonnie.com/",
                            "reasonDesc": "Card Members who spend like you frequent this business",
                            "merchantRating": 4,
                            "reviewCount": 14,
                            "RecommendationType": "PERSONALIZED",
                            "DigitalRecoLocationList": {
                                "DigitalRecoLocation": [
                                    {
                                        "digitalRecoAddressDef": {
                                            "StreetAddressLine1DS": "2912 23RD AVE",
                                            "CityNM": "ASTORIA",
                                            "StateNM": "NY",
                                            "AddrPostalCd": "11105",
                                            "Phone": "7182742105"
                                        },
                                        "LocSENo": "1313712770"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "merchantRecommendationInfo": {
                            "merchantSENumber": "1312807159",
                            "recommendationRank": 4,
                            "merchantName": "WINE STOP",
                            "thirdpartyLink": "",
                            "memberFavoriteIndicator": "N",
                            "newMerchantIndicator": "N",
                            "merchantURL": "http://winestopnyc.com",
                            "reasonDesc": "Card Members who are interested in wine go here",
                            "merchantRating": 0,
                            "reviewCount": 0,
                            "RecommendationType": "PERSONALIZED",
                            "DigitalRecoLocationList": {
                                "DigitalRecoLocation": [
                                    {
                                        "digitalRecoAddressDef": {
                                            "StreetAddressLine1DS": "3008 BROADWAY",
                                            "CityNM": "ASTORIA",
                                            "StateNM": "NY",
                                            "AddrPostalCd": "11106",
                                            "Phone": "7182744545"
                                        },
                                        "LocSENo": "1312807159"
                                    }
                                ]
                            }
                        }
                    }
                ],
                "status": 200,
                "message": ""
            },
            {
                "type": 1006,
                "typeName": "Savings to Date",
                "data": "25.00",
                "status": 200,
                "message": ""
            },
            {
                "type": 1007,
                "typeName": "Membership Rewards",
                "data": {
                    "name": "MR_POINT_BALANCE",
                    "value": "130928"
                },
                "status": 200,
                "message": ""
            }
        ]
    }
}
