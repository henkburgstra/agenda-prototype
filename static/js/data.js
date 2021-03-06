var hours = [
	{time: 7.5, officeHours: false}, {time: 8, officeHours: true}, {time: 8.5, officeHours: true}, 
	{time: 9, officeHours: true}, {time: 9.5, officeHours: true}, {time: 10, officeHours: true},
	{time: 10.5, officeHours: true}, {time: 11, officeHours: true}, {time: 11.5, officeHours: true}, 
	{time: 12, officeHours: false}, {time: 12.5, officeHours: false}, {time: 13, officeHours: true}, 
	{time: 13.5, officeHours: true}, {time: 14, officeHours: true}, {time: 14.5, officeHours: true},
	{time: 15, officeHours: true}, {time: 15.5, officeHours: true}, {time: 16, officeHours: true},
	{time: 16.5, officeHours: true}, {time: 17, officeHours: true}, {time: 17.5, officeHours: true},
	{time: 18, officeHours: false}
];

var activities = {
    "AA hb": {
        "code": "AA hb",
        "description": "huisbezoek aud. ass.",
        "color": "#ffffff"
    },
    "AVP": {
        "code": "AVP",
        "description": "auditieve verwerkingsproblematiek",
        "color": "#ffff80"
    },
    "AVP gspr": {
        "code": "AVP gspr",
        "description": "adviesgesprek na AVP",
        "color": "#ffff80"
    },
    "AvD": {
        "code": "AvD",
        "description": "Audioloog van dienst",
        "color": "#d0d0f0"
    },
    "BCD": {
        "code": "BCD",
        "description": "BCD, Baha",
        "color": "#008000"
    },
    "BERA kind": {
        "code": "BERA kind",
        "description": "BERA/uitval NGS",
        "color": "#c0c0c0"
    },
    "BERA volw": {
        "code": "BERA volw",
        "description": "BERA bij volwassene",
        "color": "#c0c0c0"
    },
    "CHT": {
        "code": "CHT",
        "description": "controle htt volw.",
        "color": "#8080ff"
    },
    "CHT solo": {
        "code": "CHT solo",
        "description": "controle solo + evt CHT",
        "color": "#8080ff"
    },
    "FAN": {
        "code": "FAN",
        "description": "fonologische analyse",
        "color": "#ffff80"
    },
    "Feestdagen": {
        "code": "Feestdagen",
        "description": "Feestdagen",
        "color": "#8080ff"
    },
    "Fiets": {
        "code": "Fiets",
        "description": "Dienstfiets mee",
        "color": "#6bc7fe"
    },
    "Jarig": {
        "code": "Jarig",
        "description": "Jarig",
        "color": "#ff8000"
    },
    "KA": {
        "code": "KA",
        "description": "kinderaudiometrie 3-7 jaar en/of  indicatie T/S",
        "color": "#80ffff"
    },
    "KA-c": {
        "code": "KA-c",
        "description": "kinderaudiometrie 3-7 jaar en/of  indicatie T/S",
        "color": "#9ddfff"
    },
    "KA-n": {
        "code": "KA-n",
        "description": "kinderaudiometrie 3-7 jaar en/of  indicatie T/S",
        "color": "#4aa5ff"
    },
    "LO": {
        "code": "LO",
        "description": "logopedisch onderzoek",
        "color": "#ffff80"
    },
    "LO gspr": {
        "code": "LO gspr",
        "description": "adviesgesprek na LO",
        "color": "#ffff80"
    },
    "LO hb": {
        "code": "LO hb",
        "description": "huisbezoek logopedist",
        "color": "#ffff80"
    },
    "ORtijd": {
        "code": "ORtijd",
        "description": "OR tijd",
        "color": "#408080"
    },
    "PO": {
        "code": "PO",
        "description": "psychologisch onderzoek",
        "color": "#ff8040"
    },
    "PO gspr": {
        "code": "PO gspr",
        "description": "adviesgesprek na PO",
        "color": "#ff8040"
    },
    "SGB": {
        "code": "SGB",
        "description": "SGB tijd",
        "color": "#408080"
    },
    "VA": {
        "code": "VA",
        "description": "volwassenaudiometrie \u003e7",
        "color": "#ffffff"
    },
    "VA-Vest": {
        "code": "VA-Vest",
        "description": "Audiometrie voor vestibulair",
        "color": "#808000"
    },
    "VA/KA+CHT kind": {
        "code": "VA/KA+CHT kind",
        "description": "audiometrie + contr htt bij een kind",
        "color": "#ff80c0"
    },
    "VA/KA+CHT+solo": {
        "code": "VA/KA+CHT+solo",
        "description": "audiometrie + contr htt + solo",
        "color": "#ff80ff"
    },
    "VO": {
        "code": "VO",
        "description": "vestibulair onderzoek",
        "color": "#808000"
    },
    "Verlofaanvraag in behandeling": {
        "code": "Verlofaanvraag in behandeling",
        "description": "Verlofaanvraag in behandeling",
        "color": "#ffff00"
    },
    "Xterna": {
        "code": "Xterna",
        "description": "Xterna",
        "color": "#408080"
    },
    "brieventijd": {
        "code": "brieventijd",
        "description": "brieventijd",
        "color": "#408080"
    },
    "ci": {
        "code": "ci",
        "description": "controle CI",
        "color": "#ff00ff"
    },
    "clienttijd": {
        "code": "clienttijd",
        "description": "Clientgebonden werktijd",
        "color": "#f0d0c0"
    },
    "combi": {
        "code": "combi",
        "description": "combi spreekuur",
        "color": "#ff8040"
    },
    "dkg-ew-vra": {
        "code": "dkg-ew-vra",
        "description": "ewing / vra",
        "color": "#ffffff"
    },
    "ewing": {
        "code": "ewing",
        "description": "ewing onderzoek",
        "color": "#80ffff"
    },
    "gbk": {
        "code": "gbk",
        "description": "groepsbijeenkomst",
        "color": "#ffae5e"
    },
    "gsp": {
        "code": "gsp",
        "description": "gesprek",
        "color": "#ffffff"
    },
    "ling": {
        "code": "ling",
        "description": "linguistisch onderzoek",
        "color": "#ffff80"
    },
    "ling gspr": {
        "code": "ling gspr",
        "description": "adviesgesprek na ling",
        "color": "#ffff80"
    },
    "mw-gsp": {
        "code": "mw-gsp",
        "description": "gesprek maatsch. werk",
        "color": "#ff0080"
    },
    "mw-hb": {
        "code": "mw-hb",
        "description": "huisbezoek maatsch. werk",
        "color": "#ff0080"
    },
    "mw-sb": {
        "code": "mw-sb",
        "description": "schoolbezoek maatsch. werk",
        "color": "#ff0080"
    },
    "oa": {
        "code": "oa",
        "description": "onderzoek audioloog",
        "color": "#00ff00"
    },
    "onderzoek Ede": {
        "code": "onderzoek Ede",
        "description": "alle onderzoeken op locatie Ede",
        "color": "#a0a0a0"
    },
    "onderzoek PG school": {
        "code": "onderzoek PG school",
        "description": "audiometrie op PG school",
        "color": "#ff80c0"
    },
    "onderzoek Poli": {
        "code": "onderzoek Poli",
        "description": "audiometrie op poli",
        "color": "#ff80c0"
    },
    "overhead": {
        "code": "overhead",
        "description": "Niet-clientgebonden werktijd",
        "color": "#d0d0f0"
    },
    "overleg": {
        "code": "overleg",
        "description": "overleg",
        "color": "#408080"
    },
    "poli": {
        "code": "poli",
        "description": "poli KNO",
        "color": "#408080"
    },
    "roostervrij": {
        "code": "roostervrij",
        "description": "Roostervrij",
        "color": "#c0e0c0"
    },
    "spoedplek": {
        "code": "spoedplek",
        "description": "spoedplek",
        "color": "#ff0000"
    },
    "stempoli": {
        "code": "stempoli",
        "description": "stemonderzoeken op poli KNO",
        "color": "#a0a0a0"
    },
    "tc": {
        "code": "tc",
        "description": "telefonisch consult",
        "color": "#ffffff"
    },
    "tinn": {
        "code": "tinn",
        "description": "tinnitus spreekuur",
        "color": "#ff0080"
    },
    "uitwerktijd": {
        "code": "uitwerktijd",
        "description": "uitwerken van een onderzoek",
        "color": "#408080"
    },
    "vra": {
        "code": "vra",
        "description": "vra onderzoek",
        "color": "#80ffff"
    },
    "vrij-opgenomen": {
        "code": "vrij-opgenomen",
        "description": "Vrij opgenomen",
        "color": "#80f080"
    },
    "xtraT": {
        "code": "xtraT",
        "description": "Extra tijd",
        "color": "#408080"
    },
    "ziek": {
        "code": "ziek",
        "description": "Ziek",
        "color": "#f08080"
    }
}

var items = {
	groups: {
		g1: {
			pattern: 'daily',
			begin: '2014-01-01',
			end: '2014-01-01',
			activity: 'BERA kind' 
		},
		g2: {
			pattern: 'weekly',
			begin: '2014-01-01',
			end: '2014-02-01',
			activity: 'spoedplek'
		}
	},
	appointments: {
		ACTB_12345: {
			type: 'client-meeting',
			"begin": '10:00',
			end: '12:00',
			group: 'g1'
		},
		ACTB_23456: {
			type: 'client-meeting',
			"begin": '14:15',
			end: '17:30',
			group: 'g2'
		}
		
	},
    "dates": [
        {
            "date": "2014-07-30",
            "resources": [
                {
                    "key": "05",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00285",
                            "activities": [
                                "KA-c",
                                "KA-n"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-13A01677",
                            "activities": [
                                "KA-c",
                                "KA-n"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        }
                    ],
                    "items": ['ACTB_12345']
                },
                {
                    "key": "1.06",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-11A01001",
                            "activities": [
                                "CHT",
                                "VA"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-11A01000",
                            "activities": [
                                "CHT",
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "1.04",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-11A01230",
                            "activities": [
                                "BERA kind",
                                "BERA volw"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-11A01229",
                            "activities": [
                                "BERA kind",
                                "BERA volw"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": ['ACTB_23456']
                },
                {
                    "key": "AR",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-12A01001",
                            "activities": [
                                "VA"
                            ],
                            "begin": "13:00",
                            "end": "16:45"
                        },
                        {
                            "key": "PJJG-12A01000",
                            "activities": [
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "EAD",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-09A00733",
                            "activities": [
                                "overleg"
                            ],
                            "begin": "13:00",
                            "end": "14:00"
                        },
                        {
                            "key": "PJJG-09A00734",
                            "activities": [
                                "CHT"
                            ],
                            "begin": "14:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-09A00735",
                            "activities": [
                                "VA"
                            ],
                            "begin": "11:15",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-09A00088",
                            "activities": [
                                "CHT"
                            ],
                            "begin": "11:15",
                            "end": "12:15"
                        },
                        {
                            "key": "PJJG-09A00092",
                            "activities": [
                                "poli"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "03",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00283",
                            "activities": [
                                "CHT",
                                "VA",
                                "VA-Vest",
                                "oa"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "dir",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-10A00494",
                            "activities": [
                                "overhead"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MvdG",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-10A00617",
                            "activities": [
                                "overhead"
                            ],
                            "begin": "08:45",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "00",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-13A02496",
                            "activities": [
                                "PO"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-11A00974",
                            "activities": [
                                "LO"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MV",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-13A02524",
                            "activities": [
                                "overhead"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "E03",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-14E00018",
                            "activities": [
                                "Baha-C",
                                "Baha-n",
                                "CHT",
                                "KA-n",
                                "VA",
                                "VA-kort",
                                "oa",
                                "vra"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "1.08",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00289",
                            "activities": [
                                "CHT",
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "IM",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-13A02156",
                            "activities": [
                                "combi"
                            ],
                            "begin": "09:00",
                            "end": "11:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "LK",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-14E00065",
                            "activities": [
                                "Baha-C"
                            ],
                            "begin": "10:15",
                            "end": "11:00"
                        },
                        {
                            "key": "PJJG-14E00069",
                            "activities": [
                                "Baha-n"
                            ],
                            "begin": "15:15",
                            "end": "16:30"
                        },
                        {
                            "key": "PJJG-14E00068",
                            "activities": [
                                "Baha-C"
                            ],
                            "begin": "14:15",
                            "end": "15:00"
                        },
                        {
                            "key": "PJJG-14E00064",
                            "activities": [
                                "Baha-C"
                            ],
                            "begin": "09:15",
                            "end": "10:00"
                        },
                        {
                            "key": "PJJG-14E00063",
                            "activities": [
                                "VA-kort"
                            ],
                            "begin": "08:45",
                            "end": "09:15"
                        },
                        {
                            "key": "PJJG-14E00067",
                            "activities": [
                                "VA"
                            ],
                            "begin": "13:00",
                            "end": "14:15"
                        },
                        {
                            "key": "PJJG-14E00066",
                            "activities": [
                                "Baha-n"
                            ],
                            "begin": "11:00",
                            "end": "12:15"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "EB",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-09A00069",
                            "activities": [
                                "vra"
                            ],
                            "begin": "10:00",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "1.01",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-11A00982",
                            "activities": [
                                "LO",
                                "ling"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-11A02170",
                            "activities": [
                                "ling"
                            ],
                            "begin": "09:30",
                            "end": "11:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "CSW",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-13A00748",
                            "activities": [
                                "ewing"
                            ],
                            "begin": "13:00",
                            "end": "15:30"
                        },
                        {
                            "key": "PJJG-13A00755",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "15:30",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-13A00753",
                            "activities": [
                                "LO"
                            ],
                            "begin": "08:45",
                            "end": "10:45"
                        },
                        {
                            "key": "PJJG-13A00754",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "10:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "E01",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-14E00001",
                            "activities": [
                                "LO",
                                "PO",
                                "combi"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MH",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-11A01159",
                            "activities": [
                                "overhead"
                            ],
                            "begin": "15:30",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-09A00148",
                            "activities": [
                                "poli"
                            ],
                            "begin": "08:00",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-11A01158",
                            "activities": [
                                "CHT"
                            ],
                            "begin": "13:30",
                            "end": "15:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "E04",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-14E00019",
                            "activities": [
                                "Baha-C",
                                "Baha-n",
                                "CHT",
                                "KA-n",
                                "VA",
                                "VA-kort",
                                "oa",
                                "vra"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "JSP",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-09A00740",
                            "activities": [
                                "poli"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-09A00095",
                            "activities": [
                                "overleg"
                            ],
                            "begin": "13:00",
                            "end": "14:00"
                        },
                        {
                            "key": "PJJG-09A00096",
                            "activities": [
                                "CHT"
                            ],
                            "begin": "14:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "02",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00282",
                            "activities": [
                                "oa"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "Vest",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00330",
                            "activities": [
                                "VO"
                            ],
                            "begin": "08:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "01",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00396",
                            "activities": [
                                "KA",
                                "KA-c",
                                "KA-n",
                                "LO",
                                "ewing"
                            ],
                            "begin": "08:45",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "1.07",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-11A01010",
                            "activities": [
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-12A02299",
                            "activities": [
                                "LO"
                            ],
                            "begin": "08:45",
                            "end": "10:45"
                        },
                        {
                            "key": "PJJG-12A02300",
                            "activities": [
                                "VA"
                            ],
                            "begin": "11:15",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-11A00995",
                            "activities": [
                                "KA-c",
                                "KA-n",
                                "LO"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "IT",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-13A01391",
                            "activities": [
                                "KA-n"
                            ],
                            "begin": "13:00",
                            "end": "15:30"
                        },
                        {
                            "key": "PJJG-13A01390",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "10:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-13A01392",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "15:30",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-13A01346",
                            "activities": [
                                "LO"
                            ],
                            "begin": "08:45",
                            "end": "10:45"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "WG",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-09A00134",
                            "activities": [
                                "oa"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-09A00603",
                            "activities": [
                                "AvD"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "04",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-09A00284",
                            "activities": [
                                "CHT",
                                "VA",
                                "oa"
                            ],
                            "begin": "08:45",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MdV",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-13A02151",
                            "activities": [
                                "combi"
                            ],
                            "begin": "09:00",
                            "end": "11:00"
                        },
                        {
                            "key": "PJJG-11A00909",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "16:15",
                            "end": "17:30"
                        },
                        {
                            "key": "PJJG-11A00900",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "08:00",
                            "end": "08:30"
                        },
                        {
                            "key": "PJJG-11A00908",
                            "activities": [
                                "KA-c"
                            ],
                            "begin": "15:30",
                            "end": "16:15"
                        },
                        {
                            "key": "PJJG-13A00749",
                            "activities": [
                                "ewing"
                            ],
                            "begin": "13:00",
                            "end": "15:30"
                        },
                        {
                            "key": "PJJG-13A02152",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "11:00",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MW",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-11A01374",
                            "activities": [
                                "mw-gsp",
                                "tinn"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-11A01373",
                            "activities": [
                                "mw-gsp",
                                "tinn"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "WJA",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-12A01746",
                            "activities": [
                                "overhead"
                            ],
                            "begin": "11:15",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-12A01745",
                            "activities": [
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "11:15"
                        },
                        {
                            "key": "PJJG-12A01778",
                            "activities": [
                                "VA"
                            ],
                            "begin": "11:15",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "E02",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-14E00017",
                            "activities": [
                                "LO",
                                "PO",
                                "combi"
                            ],
                            "begin": "08:00",
                            "end": "17:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "HH",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-10A01831",
                            "activities": [
                                "AvD"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-13A00070",
                            "activities": [
                                "oa"
                            ],
                            "begin": "15:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-13A00069",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "13:00",
                            "end": "15:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "LJLK",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-11A00341",
                            "activities": [
                                "overleg"
                            ],
                            "begin": "13:00",
                            "end": "14:00"
                        },
                        {
                            "key": "PJJG-14A00652",
                            "activities": [
                                "CHT"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-14A00655",
                            "activities": [
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MRK",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-11A00941",
                            "activities": [
                                "KA-n"
                            ],
                            "begin": "08:45",
                            "end": "11:15"
                        },
                        {
                            "key": "PJJG-11A00942",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "11:15",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-12A00065",
                            "activities": [
                                "LO"
                            ],
                            "begin": "13:00",
                            "end": "15:00"
                        },
                        {
                            "key": "PJJG-11A00940",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "07:30",
                            "end": "08:30"
                        },
                        {
                            "key": "PJJG-12A00066",
                            "activities": [
                                "brieventijd"
                            ],
                            "begin": "15:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "MZ",
                    "type": "person",
                    "schedule": [
                        {
                            "key": "PJJG-12A02197",
                            "activities": [
                                "ling"
                            ],
                            "begin": "13:30",
                            "end": "15:30"
                        },
                        {
                            "key": "PJJG-11A02092",
                            "activities": [
                                "ling"
                            ],
                            "begin": "09:30",
                            "end": "11:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "06",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-14A00722",
                            "activities": [
                                "PO"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        },
                        {
                            "key": "PJJG-11A02178",
                            "activities": [
                                "PO",
                                "combi"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        }
                    ],
                    "items": []
                },
                {
                    "key": "1.05",
                    "type": "room",
                    "schedule": [
                        {
                            "key": "PJJG-13A01407",
                            "activities": [
                                "VA"
                            ],
                            "begin": "08:45",
                            "end": "12:30"
                        },
                        {
                            "key": "PJJG-13A01408",
                            "activities": [
                                "VA"
                            ],
                            "begin": "13:00",
                            "end": "17:00"
                        }
                    ],
                    "items": []
                }
            ]
        }
    ]
};
