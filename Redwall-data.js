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
      Skarlath: {
        books: ['Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/8d/Skarlathfangorn.jpg/revision/latest/scale-to-width-down/200?cb=20090803184645',
        origin: 'Northlands',
        weapons: ['Natural Defenses']
      },

      Laird_Mactalon: {
        books: ['Salamandastron'],
        image: 'No image available',
        origin: 'Northern Mountains',
        weapons: ['Natural Defenses']
      },

      Stryk_Redkite: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/93/Stryk.jpg/revision/latest?cb=20060901232017',
        origin: 'Northern Mountains',
        weapons: ['Natural Defenses']
      },

      Rocangus: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/95/Rocangus.jpg/revision/latest/scale-to-width-down/175?cb=20081012201158',
        origin: 'Northern Mountains',
        weapons: ['Natural Defenses']
      },

      Megraw: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/59/Megraw.jpg/revision/latest?cb=20070103151010',
        origin: 'Northeast',
        weapons: ['Natural Defenses']
      },

      Pandion_Piketalon: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/ca/PandionPiketalon.jpg/revision/latest?cb=20051231001218',
        origin: 'Green Isle',
        weapons: ['Natural Defenses']
      },

      Warbeak: {
        books: ['Redwall', 'Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/01/Warbeak.jpg/revision/latest?cb=20051125181920',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      }
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
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/18/Pallum_TV_Series.png/revision/latest?cb=20100908224505',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      },

      Bowly_Pintips: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/37/Bowly.jpg/revision/latest?cb=20070923174539',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      },

      Ambrose_Spike: {
        books: ['Redwall', 'Mattimeo', 'The Great Redwall Feast', 'The Redwall Cookbook'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/62/AmbroseSpike.jpg/revision/latest?cb=20060103011122',
        origin: 'Redwall Abbey',
        weapons: ['Bow and Arrows']
      },

      Abbess_Tansy: {
        books: ['Pearls of Lutra', 'The Long Patrol'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/ce/Tansy.jpg/revision/latest?cb=20051025021613',
        origin: 'Redwall Abbey',
        weapons: ['Natural Defenses']
      },

      Abbot_Humble: {
        books: ['Rakkety Tam'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/76/Humble.JPG/revision/latest/scale-to-width-down/200?cb=20070322030615',
        origin: 'Redwall Abbey',
        weapons: ['Natural Defenses']
      },

      Abbot_Phredd: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/c1/Phredd.jpg/revision/latest?cb=20060130023058',
        origin: 'Redwall Abbey',
        weapons: ['Natural Defenses']
      },

      Durry_Quill: {
        books: ['Mariel of Redwall', 'Martin the Warrior', 'The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/8a/DurryQuill.jpg/revision/latest?cb=20060104073557',
        origin: 'Redwall Abbey',
        weapons: ['Haversack', 'Daggers', 'Finnbarr Sword']
      },

      Orkwil_Prink: {
        books: ['Eulalia!'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/70/Orkwilprink.jpg/revision/latest/scale-to-width-down/250?cb=20080418052932',
        origin: 'Mossflower Woods',
        weapons: ['Sword of Martin', 'Club', 'Dagger']
      },

      Triggut_Frap: {
        books: ['The Sable Quean'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a0/Triggut_Frap.JPG/revision/latest/scale-to-width-down/220?cb=20140618082433',
        origin: 'Unknown',
        weapons: ['Stave', 'Dagger']
      }
    },

    mice: {
      Luke_the_Warrior: {
        books: ['Martin the Warrior', 'The Legend of Luke'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/2/2d/Luke.jpg/revision/latest?cb=20051025034018',
        origin: 'Saint Ninian\'s',
        weapons: ['Sword of Martin', 'Scimitar']
      },

      Martin_the_Warrior: {
        books: ['Mossflower', 'Martin the Warrior', 'The Legend of Luke'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/5a/Martin.jpg/revision/latest?cb=20130119054843',
        origin: 'North Shores',
        weapons: ['Sword of Martin', 'Sword', 'Sling', 'Staff', 'Bow and Arrows', 'Pike']
      },

      Abbess_Germaine: {
        books: ['Mossflower', 'The Legend of Luke'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/6c/AbbessGermaine.jpg/revision/latest/scale-to-width-down/150?cb=20081014030210',
        origin: 'Loamhedge Abbey',
        weapons: ['Natural Defenses']
      },

      Mariel_Gullwhacker: {
        books: ['Mariel of Redwall', 'The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/59/Marielfangorn.jpg/revision/latest/scale-to-width-down/200?cb=20090803184651',
        origin: 'Unknown',
        weapons: ['Gullwhacker', 'Axe']
      },

      Dandin: {
        books: ['Mariel of Redwall', 'The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a8/Dandin.jpg/revision/latest?cb=20051121204013',
        origin: 'Redwall Abbey',
        weapons: ['Sword of Martin', 'Long Dagger']
      },

      Matthias: {
        books: ['Redwall', 'Mattimeo', 'The Great Redwall Feast', 'A Redwall Winter\'s Tale', 'The Redwall Cookbook'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/55/Matthias2.jpg/revision/latest/scale-to-width-down/150?cb=20060101002509',
        origin: 'Mossflower Woods',
        weapons: ['Sword of Martin', 'Sling', 'Dagger', 'Bow and Arrows', 'Staff']
      },

      Mattimeo: {
        books: ['Mattimeo', 'The Redwall Cookbook'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/e3/Mattimeo2.gif/revision/latest?cb=20060213153942',
        origin: 'Redwall Abbey',
        weapons: ['Sword of Martin', 'Dagger']
      },

      Martin_II: {
        books: ['Mattimeo', 'The Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/4e/Martin2.gif/revision/latest/scale-to-width-down/150?cb=20051025023301',
        origin: 'Redwall Abbey',
        weapons: ['Sword of Martin']
      },

      Cornflower: {
        books: ['Redwall', 'Mattimeo', 'The Great Redwall Feast', 'A Redwall Winter\'s Tale', 'The Redwall Cookbook'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/0a/Cornflower.jpg/revision/latest?cb=20100718170924',
        origin: 'Redwall Abbey',
        weapons: ['Kitchen Knife']
      }
    },

    moles: {
      Grumm_Trencher: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/0e/Grumm.jpg/revision/latest/scale-to-width-down/250?cb=20080427023752',
        origin: 'Noonvale',
        weapons: ['Ladle', 'Staff']
      },

      Young_Dinny: {
        books: ['Mossflower', 'The Legend of Luke', 'Doomwyte'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/8b/Dinny.jpg/revision/latest?cb=20060504194118',
        origin: 'Mossflower Woods',
        weapons: ['Daggers', 'Pike', 'Sling']
      },

      Foremole: {
        books: ['Mariel of Redwall', 'The Bellmaker', 'Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/08/Foremole-bm.jpg/revision/latest?cb=20070302150918',
        origin: 'Redwall Abbey',
        weapons: ['Natural Defenses']
      },

      Arula: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f3/Arula2.PNG/revision/latest/scale-to-width-down/150?cb=20081009211911',
        origin: 'Redwall Abbey',
        weapons: ['Quarterstaff', 'Kitchen Knife', 'Sling']
      },

      Furpp_Straightfurrer: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/af/Furpp_Straightfurrer.jpg/revision/latest/scale-to-width-down/130?cb=20110204120013',
        origin: 'Southsward',
        weapons: ['Natural Defenses']
      },

      Egbert_the_Scholar: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/80/Egburt.jpg/revision/latest?cb=20060318082254',
        origin: 'Southsward',
        weapons: ['Natural Defenses']
      },

      Axtel_Sturnclaw: {
        books: ['The Sable Quean'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/65/AxtelSR.png/revision/latest/scale-to-width-down/250?cb=20100224224255',
        origin: 'Unknown',
        weapons: ['War Hammer']
      }
    },

    otters: {
      Warthorn: {
        books: ['Mossflower', 'The Legend of Luke'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/9f/Skipper.gif/revision/latest?cb=20060901234302',
        origin: 'Mossflower Woods',
        weapons: ['Javelin', 'Sling']
      },

      Finnbarr_Galedeep: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b9/Finbarr.jpg/revision/latest?cb=20051015155502',
        origin: 'Unknown',
        weapons: ['Twin Blades']
      },

      Cheek_Stag_Otter: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/6b/Cheek.jpg/revision/latest?cb=20060310070608',
        origin: 'Unknown',
        weapons: ['Stick', 'Sling']
      },

      Deyna: {
        books: ['Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/80/Deyna.jpg/revision/latest?cb=20051116020256',
        origin: 'Redwall Abbey',
        weapons: ['Dagger', 'Sword of Martin']
      },

      Bragoon: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d6/Bragoon.jpg/revision/latest?cb=20051124034953',
        origin: 'Redwall Abbey',
        weapons: ['Sword of Martin', 'Spear']
      },

      Tiria_Wildlough: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/9e/Tiria3-1.JPG/revision/latest/scale-to-width-down/250?cb=20081010051024',
        origin: 'Redwall Abbey',
        weapons: ['Sling', 'Wuppit']
      },

      Leatho_Shellhound: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/5f/LeathoShellhound.jpg/revision/latest/scale-to-width-down/250?cb=20080315042606',
        origin: 'Green Isle',
        weapons: ['Sling', 'Club']
      },

      Abbess_Mhera: {
        books: ['Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/91/Mhera.jpg/revision/latest/scale-to-width-down/150?cb=20060131041104',
        origin: 'Redwall Abbey',
        weapons: ['Natural Defenses']
      },

      Thrugg: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/ba/Thrugg.PNG/revision/latest?cb=20060125044753',
        origin: 'Redwall Abbey',
        weapons: ['Sling']
      },

      Zaran_the_Black: {
        books: ['Doomwyte'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/36/Zarananddubble.jpg/revision/latest/scale-to-width-down/250?cb=20090319050802',
        origin: 'Unknown',
        weapons: ['Swords']
      },

      Skipper_Rorgus: {
        books: ['Doomwyte'],
        image: 'No image available',
        origin: 'Redwall Abbey',
        weapons: ['Sling', 'Dagger', 'Javelin']
      },

      Rorc: {
        books: ['Eulalia!'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/e7/Skipperrorc.jpg/revision/latest/scale-to-width-down/250?cb=20070320203835',
        origin: 'Redwall Abbey',
        weapons: ['Javelin']
      },

      Keyla: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/7b/Keyla.jpg/revision/latest?cb=20060901204536',
        origin: 'Unknown',
        weapons: ['Sling', 'Javelin']
      }
    },

    rabbits: {
      Fescue_Mirdop: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/68/FescueMirdop.jpg/revision/latest/scale-to-width-down/250?cb=20080427042039',
        origin: 'Scrubby Woodland',
        weapons: ['Natural Defenses']
      },

      Cosbro: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/ef/Cosbro.jpg/revision/latest?cb=20100529190729',
        origin: 'Mossflower Country',
        weapons: ['Natural Defenses']
      }
    },

    seals: {
      Hawm: {
        books: ['Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a8/Hawm.jpg/revision/latest?cb=20060106055550',
        origin: 'Western Sea',
        weapons: ['Natural Defenses']
      },

      The_Whoomers: {
        books: ['The Rogue Crew'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/be/The_Whoomers_by_Sean_Rubin.jpg/revision/latest/scale-to-width-down/250?cb=20110508210321',
        origin: 'Mossflower Country',
        weapons: ['Natural Defenses']
      }
    },

    shrews: {
      Guerilla_Union_Of_Shrews_In_Mossflower: {
        books: ['Lord Brocktree', 'The Legend of Luke - Book 2', 'Mossflower', 'The Legend of Luke', 'Outcast of Redwall', 'The Bellmaker', 'Salamandastron', 'Redwall', 'Mattimeo', 'The Pearls of Lutra', 'The Long Patrol', 'Marlfox', 'Triss', 'Loamhedge', 'Rakkety Tam', 'High Rhulain', 'Eulalia!', 'Doomwyte', 'The Sable Quean', 'The Rogue Crew'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/89/RubinShrewArchers.jpg/revision/latest/scale-to-width-down/180?cb=20090720075344',
        origin: 'Mossflower Woods',
        weapons: ['Bows and Arrows']
      },

      Dippler: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/50/Dippler.jpg/revision/latest?cb=20060901192122',
        origin: 'Mossflower Woods',
        weapons: ['Rapier', 'Sword of Martin', 'Halberd']
      },

      Fatch: {
        books: ['The Bellmaker'],
        image: 'No image available',
        origin: 'Unknown',
        weapons: ['Rapier']
      }
    },

    squirrels: {
      Felldoh: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b5/Felldoh_tv.JPG/revision/latest/scale-to-width-down/250?cb=20081222155705',
        origin: 'North Shores',
        weapons: ['Javelin', 'Cord', 'Boulder']
      },

      Samkim: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/11/Samkim2.PNG/revision/latest?cb=20080229101221',
        origin: 'Redwall Abbey',
        weapons: ['Sword of Martin', 'Bow and Arrows']
      },

      Lady_Amber: {
        books: ['Mossflower', 'The Legend of Luke'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f6/LadyAmber.jpg/revision/latest/scale-to-width-down/200?cb=20080401221016',
        origin: 'Mossflower Woods',
        weapons: ['Bow and Arrow']
      },

      Jess_Squirrel: {
        books: ['Redwall', 'Mattimeo', 'The Redwall Cookbook'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/4e/JessSquirrel.jpg/revision/latest?cb=20060125215853',
        origin: 'Mossflower Woods',
        weapons: ['Barrel of Bees', 'Sword']
      },

      Trisscar_Swordmaid: {
        books: ['Triss'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d3/Triss.PNG/revision/latest?cb=20130119054915',
        origin: 'Northlands',
        weapons: ['Sword of Martin', 'Spear', 'Dagger']
      },

      Rakkety_Tam_MacBurl: {
        books: ['Rakkety Tam'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a2/Tam_front.jpg/revision/latest/scale-to-width-down/200?cb=20051103022110',
        origin: 'Northlands',
        weapons: ['Sword of Martin', 'Claymore', 'Dirk', 'Sgian Dhu', 'Buckler']
      },

      Wild_Doogy_Plumm: {
        books: ['Rakkety Tam'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f2/DoogyPlumm2.PNG/revision/latest?cb=20060124074938',
        origin: 'Highlands',
        weapons: ['Claymore', 'Dirk', 'Sgian Dhu']
      },

      Songbreeze_Swifteye: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/7e/Songbreeze.jpg/revision/latest?cb=20051113013056',
        origin: 'Mossflower Woods',
        weapons: ['Leafwood']
      },

      Dannflower_Reguba: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/65/Dannflor.jpg/revision/latest?cb=20060502204412',
        origin: 'Redwall Abbey',
        weapons: ['Sword of Martin', 'Spear']
      },

      Janglur_Swifteye: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b5/Janglur.jpg/revision/latest/scale-to-width-down/100?cb=20060301122038',
        origin: 'Mossflower Country',
        weapons: ['Sling', 'Flute with Dart', 'Bow and Arrows']
      }
    },

    voles: {
      Druwp: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/fd/Druwp.jpg/revision/latest?cb=20080427033831',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      },

      Rollo: {
        books: ['Mattimeo', 'Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a9/Rollo2.jpg/revision/latest/scale-to-width-down/150?cb=20051025155746',
        origin: 'Redwall Abbey',
        weapons: ['Natural Defenses']
      },

      Burble: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d7/Burble2.jpg/revision/latest?cb=20070529144713',
        origin: 'Mossflower Woods',
        weapons: ['Spear']
      },

      Yoofus_Lightpaw: {
        books: ['Rakkety Tam'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/76/Yoofus.jpg/revision/latest?cb=20060124231101',
        origin: 'Mossflower Woods',
        weapons: ['Dagger', 'Sling', 'Curved Sword']
      },

      Furgle_the_Hermit: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/c7/Furgle.jpg/revision/latest/scale-to-width-down/150?cb=20081012201350',
        origin: 'Mossflower Woods',
        weapons: ['Natural Defenses']
      },

      Grumpy_Watervole: {
        books: ['Eulalia!'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/44/Grumpywatervole.jpg/revision/latest/scale-to-width-down/250?cb=20080422062308',
        origin: 'Mossflower Woods',
        weapons: ['Bow and Arrows', 'Dagger', 'Club', 'Sword of Martin']
      },
    }
  },

  evil_creatures: {
    birds: {
      Krakulat: {
        books: ['Outcast of Redwall'], 
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/55/Krakulat.jpg/revision/latest/scale-to-width-down/200?cb=20081125190912',
        origin: 'Mossflower Woods',
        weapons: ['Natural Defenses']
      },

      General_Ironbeak: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/fc/Ironbeak.jpg/revision/latest?cb=20051015010601',
        origin: 'Northlands',
        weapons: ['Natural Defenses']
      },

      Mangiz: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/09/Mangiz.jpg/revision/latest?cb=20080302210056',
        origin: 'Northlands',
        weapons: ['Natural Defenses']
      },

      Korvus_Skurr: {
        books: ['Doomwyte'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/ec/Korvusskurr.jpg/revision/latest/scale-to-width-down/250?cb=20090319050951',
        origin: 'Mossflower Woods',
        weapons: ['Natural Defenses']
      }
    },

    cats: {
      Squire_Julian_Gingivere: {
        books: ['Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/3a/Julian-byo.jpg/revision/latest?cb=20051012020034',
        origin: 'Mossflower Woods',
        weapons: ['Natural Defenses']
      },

      Verdauga_Greeneyes: {
        books: ['Mossflower'],
        image: 'No image available',
        origin: 'Northlands',
        weapons: ['Natural Defenses']
      },

      Tsarmina_Greeneyes: {
        books: ['Mossflower'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/bf/Tsarmina1.jpg/revision/latest/scale-to-width-down/250?cb=20070909204356',
        origin: 'Northlands',
        weapons: ['Bow and Arrows', 'Spear']
      },

      Gingivere_Greeneyes: {
        books: ['Mossflower'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/aa/Gingivere_Greeneyes.jpg/revision/latest/scale-to-width-down/150?cb=20100902152321',
        origin: 'Northlands',
        weapons: ['Natural Defenses']
      },

      Ungatt_Trunn: {
        books: ['Lord Brocktree'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/33/UngattTrunn.JPG/revision/latest/scale-to-width-down/200?cb=20051025013500',
        origin: 'Northern Highlands',
        weapons: ['Trident', 'Cutlass']
      },

      Riggu_Felis: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/7e/RigguFelis.JPG/revision/latest?cb=20070322024958',
        origin: 'Green Isle',
        weapons: ['Iron Barb', 'Axe']
      },

      Pitru: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/3b/Pitru.jpg/revision/latest/scale-to-width-down/225?cb=20070322025545',
        origin: 'Green Isle',
        weapons: ['Scimitar']
      }
    },

    ermine: {
      Dirgecallers: {
        books: ['The Bellmaker'],
        image: 'No image available',
        origin: 'Land of Ice and Snow',
        weapons: ['Natural Defenses']
      }
    },

    ferrets: {
      Swartt_Sixclaw: {
        books: ['Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/8f/Swartt.jpg/revision/latest?cb=20051015020829',
        origin: 'Unknown',
        weapons: ['Sword', 'Spear', 'Bow and Arrows', 'Gauntlet']
      },

      Sawney_Rath: {
        books: ['Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/6a/SawneyRath.jpg/revision/latest?cb=20060213140057',
        origin: 'Juskarath Clan',
        weapons: ['Knives']
      },

      Vallug_Bowbeast: {
        books: ['Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/fb/Vallug.jpg/revision/latest?cb=20060214153147',
        origin: 'Juskarath Clan',
        weapons: ['Bow and Arrows', 'Sword']
      },

      Princess_Kurda: {
        books: ['Triss'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f0/Kurda.jpg/revision/latest/scale-to-width-down/150?cb=20090409030802',
        origin: 'Riftgard',
        weapons: ['Sabre', 'Rapier', 'Broadsword']
      }
    },

    foxes: {
      Urgan_Nagru: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/8c/Urgan.gif/revision/latest/scale-to-width-down/200?cb=20051015154634',
        origin: 'Land of Ice and Snow',
        weapons: ['Sword', 'Iron Claws']
      },

      Silvamord: {
        books: ['The Bellmaker'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/91/Silvamord.jpg/revision/latest/scale-to-width-down/200?cb=20110204122421',
        origin: 'Land of Ice and Snow',
        weapons: ['Sword', 'Bow and Arrows']
      },

      Slagar_the_Cruel: {
        books: ['Redwall', 'Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f5/Slagar.gif/revision/latest?cb=20080107205632',
        origin: 'Mossflower Woods',
        weapons: ['Bolas', 'Sword']
      },

      Rasconza: {
        books: ['The Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a0/Rasconza.jpg/revision/latest?cb=20051025031026',
        origin: 'Unknown',
        weapons: ['Throwing Knives', 'Sword']
      },

      Marlfoxes: {
        books: ['Marlfox'],
        image: 'No image available',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      },

      Ruggan_Bor: {
        books: ['Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/7/77/Ruggan-bor2.jpg/revision/latest?cb=20051112053553',
        origin: 'Juskabor Clan',
        weapons: ['Sabre']
      },

      Plugg_Firetail: {
        books: ['Triss'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/42/PluggFiretail.jpg/revision/latest?cb=20060213141554',
        origin: 'Northlands',
        weapons: ['Axe']
      },

      Nightshade_the_Seer: {
        books: ['Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f9/Nightshade.jpg/revision/latest?cb=20060901214454',
        origin: 'Unknown',
        weapons: ['Bow and Arrows']
      },

      Shang_Damsontongue: {
        books: ['Outcast of Redwall'],
        image: 'No image available',
        origin: 'A Gorge',
        weapons: ['Bolas']
      },

      Vizka_Longtooth: {
        books: ['Eulalia!'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/0e/Vizkalongtooth.jpg/revision/latest/scale-to-width-down/250?cb=20070320203847',
        origin: 'Unknown',
        weapons: ['Mace and Chain', 'Sword of Martin']
      }
    },

    pine_martens: {
      Ashleg: {
        books: ['Mossflower'],
        image: 'No image available', 
        origin: 'Kotir',
        weapons: ['Spear', 'Dagger', 'Sword']
      },

      Ublaz_Mad_Eyes: {
        books: ['Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/c/ce/Ublaz1.jpg/revision/latest/scale-to-width-down/145?cb=20051025024030',
        origin: 'Sampetra',
        weapons: ['Dagger', 'Sabre']
      },

      Atunra: {
        books: ['High Rhulain'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/b/b7/Atunra.jpg/revision/latest/scale-to-width-down/200?cb=20080607044318',
        origin: 'Green Isle',
        weapons: ['Natural Defenses']
      }
    },

    rats: {
      Gabool_the_Wild: {
        books: ['Mariel of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d3/Gaboolfangorn.jpg/revision/latest/scale-to-width-down/200?cb=20090803184700',
        origin: 'Unknown',
        weapons: ['Cutlass', 'Daggers', 'Spear']
      },

      Greypatch: {
        books: ['Mariel of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d7/Greypatch.jpg/revision/latest?cb=20051213055329',
        origin: 'Terramort',
        weapons: ['Sword', 'Dagger', 'Fire Swinger']
      },

      Cluny_the_Scourge: {
        books: ['Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/a/a7/Cluny.jpg/revision/latest?cb=20130119055046',
        origin: 'Unknown',
        weapons: ['Sword', 'Iron Spike', 'Poisonous Tail Barb']
      },

      Damug_Warfang: {
        books: ['The Long Patrol'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/43/Damug.jpg/revision/latest?cb=20060901191608',
        origin: 'Unknown',
        weapons: ['Rapscallion Sword', 'Cord and Boulder', 'Club']
      },

      Gormad_Tunn: {
        books: ['The Long Patrol'],
        image: 'No image available',
        origin: 'Unknown',
        weapons: ['Rapscallion Sword']
      },

      Raga_Bol: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/55/Raga_Bol_2.jpg/revision/latest/scale-to-width-down/250?cb=20100226182348',
        origin: 'Unknown',
        weapons: ['Hook', 'Stiletto', 'Scimitar']
      }
    },

    reptiles: {
      Asmodeus: {
        books: ['Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/94/Asmodeus.jpg/revision/latest?cb=20051115063528',
        origin: 'Mossflower Quarry',
        weapons: ['Natural Defenses']
      },

      Lask_Frildur: {
        books: ['Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/ed/Laskfrildur.jpg/revision/latest?cb=20060105080900',
        origin: 'Sampetra',
        weapons: ['Cutlass']
      },

      Oykamon: {
        books: ['Mariel of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d5/Oykamon.jpg/revision/latest/scale-to-width-down/250?cb=20170506041654',
        origin: 'Toadlands',
        weapons: ['Trident']
      },

      King_Glagweb: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/0/07/Glagweb-1-.jpg/revision/latest?cb=20070513093528',
        origin: 'Toadlands',
        weapons: ['Trident']
      },

      Marshgreen: {
        books: ['Mossflower'],
        image: 'No image available',
        origin: 'Toadlands',
        weapons: ['Trident']
      },

      Baliss_the_Slayer: {
        books: ['Doomwyte'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/97/Dwell1.jpg/revision/latest/scale-to-width-down/250?cb=20080514235936',
        origin: 'The Quarry',
        weapons: ['Natural Defenses']
      }
    },

    sables: {
      Vilaya: {
        books: ['The Sable Quean'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/6/69/VilayaSR.png/revision/latest/scale-to-width-down/250?cb=20100224222926',
        origin: 'Unknown',
        weapons: ['Venomous Dagger']
      },

      Zwilt_the_Shade: {
        books: ['The Sable Quean'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d7/ZwiltSR.png/revision/latest/scale-to-width-down/250?cb=20100224224255',
        origin: 'Unknown',
        weapons: ['Broadsword']
      },

      Armuk_Rinn_the_Conqueror: {
        books: ['The Sable Quean'], 
        image: 'No image available',
        origin: 'Unknown',
        weapons: ['Axe']
      }
    },

    stoats: {
      Vilu_Daskar: {
        books: ['The Legend of Luke'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/3a/ViluDaskar.jpg/revision/latest?cb=20060125045825',
        origin: 'Unknown',
        weapons: ['Scimitar', 'Dagger']
      },

      Badrang_the_Tyrant: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d8/Badrang.jpg/revision/latest/scale-to-width-down/250?cb=20090610235908',
        origin: 'Unknown',
        weapons: ['Sword of Martin', 'Spear', 'Dagger']
      },

      Tramun_Clogg: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/8/8f/Clogg.PNG/revision/latest?cb=20060220084159',
        origin: 'Unknown',
        weapons: ['Cutlass']
      },

      Gruven_Zann: {
        books: ['Taggerung'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/13/Gruven_Zann.jpg/revision/latest/scale-to-width-down/150?cb=20110122104117',
        origin: 'Juskarath Clan',
        weapons: ['Sword']
      },

      Flinky: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/5/5c/Glimbo.jpg/revision/latest/scale-to-width-down/200?cb=20110514114100',
        origin: 'Northlands',
        weapons: ['Sling']
      }
    },

    wearets: {
      Wearet: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/1e/Wearet.JPG/revision/latest?cb=20070610091519',
        origin: 'Unknown',
        weapons: ['Spear', 'Net']
      },

      Kharanjul: {
        books: ['Loamhedge'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/fd/Kharanjul.jpg/revision/latest?cb=20070503165809',
        origin: 'Unknown',
        weapons: ['Trident']
      }
    },

    weasels: {
      Ferahgo_the_Assassin: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/1d/Ferahgo.jpg/revision/latest/scale-to-width-down/200?cb=20051015042248',
        origin: 'Southwest Lands',
        weapons: ['Knives', 'Mace and Chain']
      },

      Klitch: {
        books: ['Salamandastron'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/f/f4/Klitch1.jpg/revision/latest/scale-to-width-down/200?cb=20080316222627',
        origin: 'Southwest Lands',
        weapons: ['Sword', 'Pike']
      },

      Eefera: {
        books: ['Taggerung'],
        image: 'No image available',
        origin: 'Juskarath Clan', 
        weapons: ['Spear', 'Knife', 'Sling']
      },

      Borumm: {
        books: ['The Long Patrol'],
        image: 'No image available',
        origin: 'Unknown',
        weapons: ['Dagger']
      }
    },

    wolverines: {
      Gulo_the_Savage: {
        books: ['Rakkety Tam'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/e/e0/Gulo.JPG/revision/latest?cb=20051102235620',
        origin: 'Land of Ice and Snow',
        weapons: ['Claymore']
      },
      
      Askor: {
        books: ['Rakkety Tam'], 
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/3c/Askor_Rus.jpg/revision/latest/scale-to-width-down/240?cb=20110501114625',
        origin: 'Land of Ice and Snow',
        weapons: ['Natural Defenses']
      }
    }
  },

  grey_creatures: {
    birds: {
      Warden_of_Marshwood_Hill: {
        books: ['Martin the Warrior'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/4/43/Warden.jpg/revision/latest?cb=20080427044855',
        origin: 'West Marshes',
        weapons: ['Natural Defenses']
      },

      Iraktaan: {
        books: ['Mariel of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/1d/Iraktaan.jpg/revision/latest?cb=20070201181949',
        origin: 'River Moss',
        weapons: ['Natural Defenses']
      }
    },

    ferrets: {
      Veil_Sixclaw: {
        books: ['Outcast of Redwall'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/3/3c/Veil1.jpg/revision/latest?cb=20051015163518',
        origin: 'Mossflower Woods',
        weapons: ['Knife', 'Staff']
      },

      Romsca: {
        books: ['Pearls of Lutra'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/17/Romsca.jpg/revision/latest?cb=20060627024746',
        origin: 'Sampetra',
        weapons: ['Cutlass']
      }
    },

    shrews: {
      Fenno: {
        books: ['Marlfox'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/1/1c/Fenno.jpg/revision/latest?cb=20060901194325',
        origin: 'Unknown',
        weapons: ['Sword', 'Rapier']
      },

      Skan: {
        books: ['Mattimeo'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/d/d5/Skan_TV_Series.png/revision/latest?cb=20101218201020',
        origin: 'Mossflower Woods',
        weapons: ['Rapier']
      },

      Highbeasts: {
        books: ['Martin the Warrior'],
        image: 'No image available',
        origin: 'Fort Marshbank',
        weapons: ['Natural Defenses']
      },

      Tugga_Bruster: {
        books: ['Doomwyte'],
        image: 'https://vignette.wikia.nocookie.net/redwall/images/9/90/Dwell3.jpg/revision/latest/scale-to-width-down/250?cb=20080515235914',
        origin: 'Mossflower Woods',
        weapons: ['Rapier', 'Club']
      },

      Bloodrippers: {
        books: ['The Rogue Crew'],
        image: 'No image available',
        origin: 'Unknown',
        weapons: ['Natural Defenses']
      }
    } 
  }
}