const data = {
  books_chronological_order: [
    'Lord Brocktree',
    'The Legend of Luke - Book 2',
    'Martin the Warrior',
    'Mossflower',
    'The Legend of Luke',
    'Outcast of Redwall',
    'Mariel of Redwall',
    'The Bellmaker',
    'Salamandastron',
    'Redwall',
    'Mattimeo',
    'The Pearls of Lutra',
    'The Long Patrol',
    'Marlfox',
    'The Taggerung',
    'Triss',
    'Loamhedge',
    'Rakkety Tam',
    'High Rhulain',
    'Eulalia!',
    'Doomwyte',
    'The Sable Quean',
    'The Rogue Crew'
  ],

  good_creatures: {
    badgers: {
      Stonepaw: {
        books: ['Lord Brocktree'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/90/Stonepaw.jpg/revision/latest?cb=20051013004830',
        origin: 'Mossflower Woods',
        weapons: ['Javelin', 'Lance']
      },
      Brocktree: {
        books: ['Lord Brocktree', 'Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/08/Brocktree.jpg/revision/latest?cb=20051013020658',
        origin: 'Mossflower Woods',
        weapons: ['Great-sword']
      },
      Sunflash_the_Mace: {
        books: ['Mossflower', 'Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/45/Sunflash2.jpg/revision/latest?cb=20051013180554',
        origin: 'Mossflower Woods',
        weapons: ['Mace']
      },
      Constance: {
        books: ['Redwall', 'Mattimeo', 'The Great Redwall Feast', 'A Redwall Winter\'s Tale', 'The Redwall Cookbook']
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/02/Constance.jpg/revision/latest?cb=20051025001254',
        origin: 'Redwall Abbey',
        weapons: ['Crossbow']
      },
      Cregga_Rose_Eyes: {
        books: ['The Long Patrol', 'Marlfox', 'Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/e3/Cregga.jpg/revision/latest/scale-to-width-down/150?cb=20051014205917',
        origin: 'Mossflower Woods',
        weapons: ['Spear', 'Battlepike', 'Axepike', 'Longbow']
      },
      Russano_the_Wise: {
        books: ['The Long Patrol', 'Taggerung', 'Lord Brocktree'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/e0/Russano.jpg/revision/latest?cb=20051014213149',
        origin: 'Mossflower Woods',
        weapons: ['Hardwood Stick']
      },
      Lonna_Bowstripe: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/0b/Lonna.JPG/revision/latest/scale-to-width-down/275?cb=20080528121258',
        origin: 'Mossflower',
        weapons: ['Bow and Arrow', 'Dagger']
      },
      Gorath_the_Flame: {
        books: ['Eulalia!'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/96/Goraththeflame.png/revision/latest?cb=20071028205319',
        origin: 'Far Southern Lands',
        weapons: ['Tung']
      },
      Urthstripe_the_Strong: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/4e/Urthstripe.jpg/revision/latest/scale-to-width-down/150?cb=20111218102415',
        origin: 'Southwest Lands',
        weapons: ['Spear', 'Sword', 'Bow and Arrows']
      },
      Orlando_the_Axe: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/9c/Orlando.jpg/revision/latest?cb=20051014183643',
        origin: 'Western Plains',
        weapons: ['Axe']
      }
    },

    bats: {
      Lord_Duskskin: {
        books: ['Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/1d/OutcastBats.jpg/revision/latest/scale-to-width-down/250?cb=20170510224907',
        origin: 'Bat Mountpit',
        weapons: ['Natural Defenses']
      },
      Lord_Cayvear: {
        books: ['Mossflower'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/88/Cayvear.jpg/revision/latest?cb=20070308021058',
        origin: 'Bat Mountpit',
        weapons: ['Natural Defenses']
      }
    },

    birds: {

    },

    dormice: {
      Dumble: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/c3/Dumble.jpg/revision/latest?cb=20051231041848',
        origin: 'Redwall Abbey',
        weapons: ['Stick']
      },
      Abbot_Glisam: {
        books: ['Doomwyte'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/4a/Glisam.jpg/revision/latest/scale-to-width-down/250?cb=20090319050802',
        origin: 'Redwall Abbey',
        weapons: ['Bow and Arrows']
      },
      Plumpin: {
        books: ['Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/4f/Plumpen.jpg/revision/latest/scale-to-width-down/250?cb=20090426151246',
        origin: 'Mossflower Woods',
        weapons: ['Curved Sword']
      },
      Toobledum: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/83/Toobledum.jpg/revision/latest?cb=20070502143343',
        origin: 'Loamhedge Abbey',
        weapons: ['Natural Defenses']
      },
      Bobbo: {
        books: ['Mariel of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/ab/Bobbo.jpg/revision/latest/scale-to-width-down/120?cb=20101009104354',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      }
    },

    hares: {
      Dorothea_Duckfontein_Dillworthy: {
        books: ['Lord Brocktree'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/e3/Dotti.gif/revision/latest?cb=20060118050436',
        origin: 'Mideastern Hills',
        weapons: ['Haversack', 'Paddle', 'Sling']
      },
      Hon_Rosie: {
        books: ['Mariel of Redwall', 'The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/76/Honrosie.jpg/revision/latest?cb=20060901201948',
        origin: 'Salamandastron',
        weapons: ['Lance', 'Sling', 'Longbow', 'Dagger']
      },
      Basil_Stag_Hare: {
        books: ['Redwall', 'Mattimeo', 'The Great Redwall Feast', 'The Redwall Cookbook'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/bb/Howellbasil.jpg/revision/latest/scale-to-width-down/250?cb=20090720074644',
        origin: 'Mossflower Woods',
        weapons: ['Natural Defenses']
      },
      Perigord_Habile_Sinistra: {
        books: ['The Long Patrol'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b6/Perigord.jpg/revision/latest?cb=20060901215712',
        origin: 'Salamandastron',
        weapons: ['Sabre']
      },
      Tamello_De_Fformelo_Tussock: {
        books: ['The Long Patrol'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/1b/Tammo.jpg/revision/latest?cb=20051130052800',
        origin: 'Camp Tussock',
        weapons: ['Dirk', 'Spear', 'Sling']
      },
      Bescarum_Lepuswold_Whippscut: {
        books: ['Triss'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/4d/Bescarum.jpg/revision/latest?cb=20060901151515',
        origin: 'Salamandastron',
        weapons: ['Sharpened Pole', 'Dagger']
      },
      Hortwill_Braebuck: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/00/Horty.jpg/revision/latest?cb=20060312175127',
        origin: 'Northern Mountains',
        weapons: ['Darrat Spear', 'Spear', 'Scimitar']
      },
      Martha_Braebuck: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/c7/Martha.jpg/revision/latest?cb=20060312032122',
        origin: 'Northern Mountains',
        weapons: ['Natural Defenses']
      },
      Cuthbert_Blanedale_Frunk: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/cd/Cuthbert.jpg/revision/latest?cb=20051231103657',
        origin: 'Salamandastron',
        weapons: ['Sabre', 'Pike-Axe']
      },
      Cleckstarr_Lepus_Montisle: {
        books: ['Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/7b/Clecky3.jpg/revision/latest?cb=20070806003953',
        origin: 'Northlands',
        weapons: ['Javelin', 'Bow and Arrows', 'Scimitar', 'Daggers', 'Axe']
      },
      Tarquin_Longleap_Woodsorrel: {
        books: ['Mariel of Redwall', 'The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/7f/Tarquin.jpg/revision/latest?cb=20051014032154',
        origin: 'Salamandastron',
        weapons: ['Harolina', 'Lance', 'Longbow', 'Sword', 'Daggers']
      },
      Meldrum_Fallowthorn_the_Magnificent: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b4/Meldrum.jpg/revision/latest?cb=20070430224725',
        origin: 'Southsward',
        weapons:['Fishing Rod with Rock']
      },
      Lieutenant_Oxeye: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d1/Big_Oxeye.jpg/revision/latest/scale-to-width-down/140?cb=20101105144121',
        origin: 'Salamandastron',
        weapons: ['Lance', 'Spear']
      },
      Sergeant_Sapwood: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f7/Sergeant_Sapwood.jpg/revision/latest/scale-to-width-down/160?cb=20101105152052',
        origin: 'Salamandastron',
        weapons: ['Lance', 'Fists']
      },
      Florian_Dugglewoof_Wilffachop: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b9/Florian.jpg/revision/latest?cb=20060901195307',
        origin: 'Noonvale',
        weapons: ['Rake', 'Daggerpole']
      },
      Pikkle_Ffolger: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/40/Pikkle.jpg/revision/latest?cb=20060901215923',
        origin: 'Salamandastron',
        weapons: ['Javelin', 'Dagger']
      },
      Meliton_Gubthorpe_Digglethwaite: {
        books: ['The Sable Quean'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/62/DiggsAmbrevina.jpg/revision/latest/scale-to-width-down/250?cb=20100404034709',
        origin: 'Salamandastron',
        weapons: ['Sling']
      },
      Buckler_Kordyne: {
        books: ['The Sable Quean'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/fb/Buckler.jpg/revision/latest?cb=20100224233642',
        origin: 'Salamandastron',
        weapons: ['Rapier']
      }
    },

    hedgehogs: {
      Pallum: {
      
      },
      Bowly_Pintips: {
      
      },
      Ambrose_Spike: {
      
      },
      Abbess_Tansy: {
      
      },
      Abbot_Humble: {
      
      },
      Abbot_Phredd: {
      
      },
      Durry_Quill: {
      
      },
      Orkwil_Prink: {
      
      },
      Triggut_Frap: {
      
      }
    },

    mice: {
      Luke_the_Warrior: {
      
      },
      Martin_the_Warrior: {
      
      },
      Abbess_Germaine: {
      
      },
      Mariel_Gullwhacker: {
      
      },
      Dandin: {
      
      },
      Matthias: {
      
      },
      Mattimeo: {
      
      },
      Martin_II: {
      
      },
      Cornflower: {
      
      }
    },

    moles: {
      Grumm_Trencher: {
      
      },
      Young_Dinny: {
      
      },
      Foremole: {
      
      },
      Arula: {
      
      },
      Furpp_Straightfurrer: {
      
      },
      Egbert_the_Scholar: {
      
      },
      Axtel_Sturnclaw: {
      
      }
    },

    otters: {
      Warthorn: {
      
      },
      Finnbarr_Galedeep: {
      
      },
      Cheek_Stag_Otter: {
      
      },
      Deyna: {
      
      },
      Bragoon: {
      
      },
      Tiria_Wildlough: {
      
      },
      Leatho_Shellhound: {
      
      },
      Abbess_Mhera: {
      
      },
      Thrugg: {
      
      },
      Zaran_the_Black: {
      
      },
      Skipper_Rorgus: {
      
      },
      Rorc: {
      
      },
      Keyla: {
      
      }
    },

    rabbits: {
      Mirdrop_Family: {

      },
      Cosbro: {

      }
    },

    seals: {
      Hawm: {

      },
      The_Whoomers: {

      }
    },

    shrews: {
      Guerilla_Union_Of_Shrews_In_Mossflower: {
      
      },
      Log_a_Log: {
      
      },
      Dippler: {
      
      },
      Fatch: {
      
      }
    },

    squirrels: {
      Felldoh: {
      
      },
      Samkim: {
      
      },
      Lady_Amber: {
      
      },
      Jess_Squirrel: {
      
      },
      Trisscar_Swordmaid: {
      
      },
      Rakkety_Tam_MacBurl: {
      
      },
      Wild_Doogy_Plumm: {
      
      },
      Songbreeze_Swifteye: {
      
      },
      Dannflower_Reguba: {
      
      },
      Janglur_Swifteye: {
      
      }
    },

    voles: {
      Druwp: {
      
      },
      Rollo: {
      
      },
      Burble: {
      
      },
      Yoofus_Lightpaw: {
      
      },
      Furgle_the_Hermit: {
      
      },
      Grumpy_Watervole: {
      
      },
    }
  },

  evil_creatures: {
    birds: {
      Krakulat: {
      
      },
      General_Ironbeak: {
      
      },
      Mangiz: {
      
      },
      Korvus_Skurr: {
      
      }
    },

    cats: {
      Squire_Julian_Gingivere: {
      
      },
      Verdauga_Greeneyes: {
      
      },
      Tsarmina_Greeneyes: {
      
      },
      Gingivere_Greeneyes: {
      
      },
      Ungatt_Trunn: {
      
      },
      Riggu_Felis: {
      
      },
      Pitru: {
      
      }
    },

    ermine: {
      Dirgecallers: {

      }
    },

    ferrets: {
      Swartt_Sixclaw: {
      
      },
      Sawney_Rath: {
      
      },
      Vallug_Bowbeast: {
      
      },
      Princess_Kurda: {
      
      }
    },

    foxes: {
      Urgan_Nagru: {
      
      },
      Silvamord: {
      
      },
      Slagar_the_Cruel: {
      
      },
      Rasconza: {
      
      },
      Marlfoxes: {
      
      },
      Ruggan_Bor: {
      
      },
      Plugg_Firetail: {
      
      },
      Nightshade_the_Seer: {
      
      },
      Shang_Damsontongue: {
      
      },
      Vizka_Longtooth: {
      
      }
    },

    pine_martens: {
      Ashleg: {
      
      },
      Ublaz_Mad_Eyes: {
      
      },
      Atunra: {
      
      }
    },

    rats: {
      Gabool_the_Wild: {
      
      },
      Greypatch: {
      
      },
      Cluny_the_Scourge: {
      
      },
      Damug_Warfang: {
      
      },
      Gormad_Tunn: {
      
      },
      Raga_Bol: {
      
      }
    },

    reptiles: {
      Asmodeus: {
      
      },
      Lask_Frildur: {
      
      },
      Oykamon: {
      
      },
      King_Glagweb: {
      
      },
      Marshgreen: {
      
      },
      Baliss_the_Slayer: {
      
      },
      Firl: {
      
      },
      Bubbub: {
      
      },
      Croikle: {
      
      },
      Rockbottom: {
      
      }
    },

    sables: {
      Vilaya: {
      
      },
      Zwilt_the_Shade: {
      
      },
      Armuk_Rinn_the_Conqueror: {
      
      }
    },

    stoats: {
      Vilu_Daskar: {
      
      },
      Badrang_the_Tyrant: {
      
      },
      Tramun_Clogg: {
      
      },
      Gruven_Zann: {
      
      },
      Flinky: {
      
      }
    },

    wearets: {
      Wearet: {

      },
      Kharanjul: {

      }
    },

    weasels: {
      Ferahgo_the_Assassin: {
      
      },
      Klitch: {
      
      },
      Eefera: {
      
      },
      Borumm: {
      
      }
    },

    wolverines: {
      Gulo_the_Savage: {

      },
      Askor: {

      }
    }
  },

  grey_creatures: {
    birds: {
      Warden_of_Marshwood_Hill: {

      },
      Iraktaan: {

      }
    },

    ferrets: {
      Veil_Sixclaw: {

      },
      Romsca: {

      }
    },

    shrews: {
      Fenno: {
      
      },
      Skan: {
      
      },
      Highbeasts: {
      
      },
      Tugga_Bruster: {
      
      },
      Bloodrippers: {
      
      }
    } 
  }
}