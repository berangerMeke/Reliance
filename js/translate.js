var app = angular.module('gaeaApp', ['pascalprecht.translate']);

app.config(function($translateProvider) {
  $translateProvider
   
 ////////////////* VERSION ANGLAISE *////////////////
    .translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!',
    
    /***************** LA NAVBAR *****************/ 
      
    statique_title:'BILINGUAL SCHOOL COMPLEX',  
     
    message:'Official dates of the exams at the end of the school year: Entrance examination in the 6th year on 16 / 05 / 2017',  
      
    langue: 'langue',
    
    /*MENU */
    home: 'HOME',
    institution: 'PROJECT OF SCHOOL',
        /*sous menu-institution*/
            presentation:'Presentation',
            school_project:'Project of school',
            educatif_project:'Educatif project',    
    school: 'SCHOOL LIFE',
        /*sous menu-school*/
            cycle_school:'Trainning cycle',
                    nursly:'Nursery',
                    primary:'Primary',
            pedagogy:'Pedagogy',
            reglement_interieur:'Rules of procedure',
            school_life:'School year',
                    rythme_scolaire:'School year',
                    association:'Association',
                    activites_extra_scolaires:'Extra-curricular activities',
            resultats_examens:'Exam results',
    admission: 'ADMISSION',
                    reglement_interieur:'Rules of procedure',
    contact: 'CONTACT',
    
    /************** FIN DE LA NAVBAR ****************/  
    
       
      
    /************** DEBUT DU HOME SLIDE ****************/
        big_text_slide1:'RELIANCE EDUCATIVE',
        smallTextSlide1:'Expertise in the service of exellence',
      
        big_text_slide2:'Practical',
        small_text_slide2:'computer courses',
      
        big_text_slide3:'The early child',
        small_text_slide3:'To study is to discover... ', 
    /************** FIN DU HOME SLIDE ****************/ 
      
     
      
    /************** PAGE  ACCUEIL  ******************/
      presentation:'Presentation',
      complexe_scolaire_maj:'BILINGUAL SCHOOL COMPLEX',
      complexe_scolaire_minus:'bilingual school complex',
      
      initiation:'Theoretical and practical introduction to computer science',
      reussite_epanouissement_mérite:'Success, fulfillment, merit, listening, are part of our keywords.',
      compose_le:'COMPOSE THE',
      pour_nous_joindre:'TO JOIN US',
      
      texte1:'Welcome to',
      texte2:'Located in Douala-Cameroon, in the district of Douala 4th (Bonabéri) by "Quatre étages" at the place called "Barrière Washington".',
      
      texte3:'Our school is composed of bilingual nursery and primary cycles (French / English). Founded in 2012, this institution was created to provide quality education in a privileged setting. Girls and boys are welcomed in a family setting. They learn there with serenity while flourishing.',
      
      texte4:'As soon as they enter primary school, students benefit from',
      texte5:'Numerous recreational activities are proposed to create a pleasant and friendly climate, as well as a good balance of life.',
      
      texte6:'Essential values to learn better and which are the keys to success for further education. the',
    texte7:'The pupil is at the center of our pedagogy. Grace to a personalized follow-up, the student is listened to, guided, oriented and better understands his objectives.',  
    
      texte8:'If you are looking for a private school for your child to learn in the best conditions, in the city of Douala and in particular Bonabéri, please call us at 675 68 67 26/697 80 50 36/677 32 28 71.',
      
      
      
    
      
      /************* DEBUT PAGE  RESULTAT AUX EXAMEN  ******************/
        cinq_premier:'The five first of each class for the 5th sequence',
        result_exam:'Official exam results',
      
        classes1:'CLASS 1',
        classes2:'CLASS 2',
        classes3:'CLASS 3',
        classes4:'CLASS 4',
        classes5:'CLASS 5',
        classes6:'CLASS 6',
        
        rang:'Rank',
        nomPrenon:'Last name and first name',
      
        rang1:'1st',
        rang2:'2nd',
        rang3:'3rd',
        rang4:'4th',
        rang5:'5th',
      
        nos_laureats:'Our official examination laureates',
        admis_aux_exam:'Admitted to',
      
        pourcentage:'Percentages of Success in Official Examinations',
      
      /************** FIN PAGE  RESULTAT AUX EXAMEN  ******************/
      
      
      
      
       /************** DEBUT PAGE  PROJET D'ECOLE  ******************/
      projet_ecole:'School Project',
      
      projet_ecole_text1:'Cameroonian schools are subject to the provisions of the Education Code. They must develop a settlement project that identifies specific modalities for the implementation of national objectives and programs.',
      
      titre_projet_ecole_text2:'THE OBJECTIVES AND ISSUES OF A SCHOOL PROJECT',
      projet_ecole_text2_1:'The school\'s project is a',
      projet_ecole_text2_2_gras:'instrument of piloting',
      projet_ecole_text2_3:'the ambition of which is to',
      projet_ecole_text2_4_gras:'more coherence:',
      projet_ecole_text2_5:'coherence within the institution, between the different actors through a',
      projet_ecole_text2_6_gras:'Respectful approach of their identity and values.',
      projet_ecole_text2_7:'Coherence between the institution and its environment, by',
      projet_ecole_text2_8_gras:'association with the conception of the institution\'s policy', 
      projet_ecole_text2_9:'families, elected officials and the institution.',
      projet_ecole_text2_10:'Coherence at the national level between the institutions of the network,',
      projet_ecole_text2_11_gras:'by the definition of objectives common to all,',
      projet_ecole_text2_12:'but which everyone can and must pursue in their own way, by innovating, inventing',
      
      titre_projet_ecole_text3:'THE INSTITUTIONAL FRAMEWORK',
      projet_ecole_text3_1_gras:'The school project should be formulated to fit into the new framework of the Strategic Orientation Plan and its objectives.',
      projet_ecole_text3_2:'The current project presented in this bulletin takes account of:',
      projet_ecole_text3_3:'of the objectives and indicators of performance of the mission primary and nursery school education',
      projet_ecole_text3_4:'of the school\'s diagnosis presented to the mission.',
      projet_ecole_text3_5:'It allows:',
      projet_ecole_text3_6:'To contribute to the achievement of the objectives of the draft strategic orientation of basic education,',
      projet_ecole_text3_7:'D’exprimer une volonté locale,',
      projet_ecole_text3_8:'To express a local will,',
      projet_ecole_text3_9:'To give coherence to activities,',
      projet_ecole_text3_10:'To express the expectations, the hopes and the collective will of a community,',
      projet_ecole_text3_11:'To update and clarify the shared values, and produce a common identity,',
      projet_ecole_text3_12:'To lead to a definition of objectives and a stable strategy open to the environment.',
      
      titre_projet_ecole_text4:'THE AXES OF PROGRESS AND DEVELOPMENT OF THE SCHOOL PROJECT',
      projet_ecole_text4_1:'Six axes of progress for the development of the school were defined and agreed by a steering group and validated by the school council',
      projet_ecole_axe_1:'Axis 1',
      projet_ecole_axe_1_text1_gras:'Valorize the brand image of the establishment by improving its attractiveness and striving for excellence.',
      projet_ecole_axe_1_text2:'This axis aims to:',
      projet_ecole_axe_1_text3:'Modernize and adapt the reception conditions for pupils and families',
      projet_ecole_axe_1_text4:'To offer students a course of excellence that guarantees success for all',
      projet_ecole_axe_1_text5:'Structuring and rationalizing the provision of training through the introduction of diversified options,',
      projet_ecole_axe_1_text6:'Encourage the participation of pupils of the school in different types of national and / or international competitions,',
      projet_ecole_axe_1_text7:'To develop and organize activities for cultural and sporting purposes,',
      projet_ecole_axe_2:'Axis 2',
      projet_ecole_axe_2_text1_gras:'Conduct the maximum number of pupils at the level of the skills expected at the end of schooling and at obtaining the corresponding diplomas.',
      projet_ecole_axe_2_text2:'This axis aims to:',
      projet_ecole_axe_2_text3:'Preventing learning difficulties and take charge of academic difficulty,',
      projet_ecole_axe_2_text4:'Accompany each pupil in the acquisition of the common core of competences for all his compulsory schooling,',
      projet_ecole_axe_2_text5:'Improve mastery of science and technology,',
      projet_ecole_axe_2_text6:'To ensure the success of each pupil through the personalization of the courses,',
      projet_ecole_axe_2_text7:'Improve success rates in the',
      projet_ecole_axe_2_text8_cep:'FSLC and GCE,',
      projet_ecole_axe_2_text10:'Preparing for secondary education, autonomy and adult life,',
      projet_ecole_axe_3:'Axis 3',
      projet_ecole_axe_3_text1_gras:'Continue and develop the language policy already under way in nursery to Class 6',
      projet_ecole_axe_3_text2:'This axis aims to:',
      projet_ecole_axe_3_text3:'Strengthening language teaching and offering all pupils a suitable language course,',
      projet_ecole_axe_3_text4:'Increase the proportion of pupils in the classroom with enhanced language,',
      projet_ecole_axe_4:'Axis 4',
      projet_ecole_axe_4_text1_gras:'Developing educational and cultural partnerships to enable the school to spread and open across the national territory.',
      projet_ecole_axe_4_text2:'This axis aims to:',
      projet_ecole_axe_4_text3:'Consolidate partnership and exchanges with the Cameroon Institute,',
      projet_ecole_axe_4_text4:'Strengthen our mission of cooperation,',
      projet_ecole_axe_4_text5:'Promote the exchange and development of inter-school educational projects,',
      projet_ecole_axe_5:'Axis 5',
      projet_ecole_axe_5_text1_gras:'Improve the professional competence of non-teaching and non-teaching staff (local contracts) through in-service training, both internally and externally.',
      projet_ecole_axe_5_text2:'This axis aims to:',
      projet_ecole_axe_5_text3:'Strengthen continuing education,',
      projet_ecole_axe_5_text4:'Having the potential of qualified teachers,',
      projet_ecole_axe_5_text5:'To constitute and make available a library of educational resources,',
      
       projet_ecole_axe_6:'Axis 6',
      projet_ecole_axe_6_text1_gras:'Pupils Life',
      projet_ecole_axe_6_text2:'This axis aims to:',
      projet_ecole_axe_6_text3:'Enforcing respect for the school and promoting accountability,',
      projet_ecole_axe_6_text4:'Contributing to the improvement of pupils\' quality of life,',
      projet_ecole_axe_6_text5:'Improve the functioning of school life,',
      projet_ecole_axe_6_text6:'Ensure pupils follow-up in collaboration with faculty, principal and families.',
      projet_ecole_axe_6_text7:'To ensure the educational animation and participate in the learning of the practices of the citizens.',
      /************** FIN PAGE  PROJET D'ECOLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  MATERNELLE  ******************/
      maternelle:'Nursery',
      maternelle_titre:'Bilingual private nursery school',
      
      maternelle_text1:'It is not necessary to be bilingual to integrate',
      maternelle_text2_gras:'bilingual private nursery school',
      maternelle_text3:'just want to become one.',
      
      maternelle_text4:'Children are welcomed from 2 years in reduced numbers (18 per class approx.).',
      maternelle_text5:'Educational supervision includes: a principal, high-level bilingual teachers, and qualified nursery assistants.',
      maternelle_text6:'Educational supervision includes: a principal, high-level bilingual teachers, and qualified nursery assistants',
      
      maternelle_text2_1:'The method of',
      maternelle_text2_2:'for nursery ',
      maternelle_text2_3:'Daily practice of English with a native English teacher and workbooks in English from the Little Section.',
      maternelle_text2_4:'Initiation from nursery to reading and writing with the syllabic method, guaranteeing an excellent spelling',
      maternelle_text2_5:'Our goal: to promote early learning, concentration and development of the child.',
      maternelle_text2_6:'Grace to the limited staff, there are many activities: ',
      maternelle_text2_7:'- Oral activities: French, English, singing ',
      maternelle_text2_8:'- Motor activity activities: plastic art workshops, physical education, body expression classes ',
      maternelle_text2_9:'- Cultural and recreational activities: educational games, sensory discoveries.',
      
      maternelle_journee_type:'Typical Day',
      maternelle_journee_type1:'- Start of the day at 8am to respect the biological rhythm of the child (welcome possible from 07:30) ',
      maternelle_journee_type2:'- Fun application exercises to awaken their curiosity',
      maternelle_journee_type3:'- nap for small',
      
      maternelle_horaire:'schedule',
      maternelle_horaire1:'Home: from 7:30 am',
      maternelle_horaire2:'School: Monday, Tuesday, Wednesday, Thursday and Friday from 08:00 to 12:30 ',
      maternelle_horaire3:'Lunch + recreation: from 10h00 to 10h30',
      maternelle_horaire4:'Educational nursery',
      maternelle_horaire5:'from 10:30 to 12:30',
      
       /************** FIN PAGE  MATERNELLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  PRIMAIRE  ******************/
        primaire:'Primary',
        primaire_titre:'The Bilingual Primary Complex',
      
        primaire_text1_gras:'Le Complexe Primaire Bilingue',
        primaire_text2:', Proposes a bilingual education (Francophone Section - Anglophone Section) in elementary classes. The classical methods of schooling allow pupils to flourish and continue their education in the best schools, in Cameroon and abroad.',
        primaire_text3:'It is not necessary to be bilingual to integrate',
        primaire_text4:'bilingual private primary school',
        primaire_text5:'just want to become one.',
        primaire_text6:'Important pedagogical support: a director, high-level bilingual teachers, educational assistants and supervisors. ',
        primaire_text7:'Teachers supervise all recreations and departures at the end of the day. ',
      
        primaire_text2_1:'Back to basics',
        primaire_text2_2:'Transmit the pleasure of learning and rigor.',
        primaire_text2_3:'Education is delivered in accordance with the official programs of Basic Education in Cameroon and goes very often beyond.',
        primaire_text2_4:'A use of the syllabic method, which guarantees excellent spelling and a good understanding of the texts',
        primaire_text2_5:'Listening and accompaniment by teachers involved.',
        primaire_text2_6:'Successful children trained in the best ways of working.',
      
        primaire_journee_type:'Typical day in our private primary school',
        primaire_journee_type1:'Beginning of the day at 7:30 am to respect the biological rhythm of the child (reception possible until 07:15).',
        primaire_journee_type2:'Work modules last about 40 minutes corresponding to the attention span of the young child.',
        primaire_journee_type3:'Exercises of application and repetition for a good assimilation.',
      
        primaire_horaire:'Private primary school hours',
        primaire_horaire1:'School: Monday, Tuesday, Thursday and Friday from 07:30 to 15:30;',
        primaire_horaire2:'Wednesday',
        primaire_horaire3:'From 7:30 to 12:30.',
      
       /************** FIN PAGE  PRIMAIRE  ******************/
      
   
  })
  
  
  
  
  
  
  
  
  
  
  
  
 ////////////////* VERSION FRANÇAISE *//////////////// 
  .translations('fr', {
    HEADLINE: 'Salut, voici une de mes applications!',
    INTRO_TEXT: 'Et il supporte i18n!',
    
  /******************* LA NAVBAR ******************/  
      
    statique_title:'COMPLEXE SCOLAIRE BILINGUE',  
    
    message:'Dates officielles des examens de fin d\'année scolaire : Concours d\'entrée en 6ème le 16 / 05 / 2017',  
      
    langue: 'language',
      
    /*MENU */
    home: 'ACCUEIL',
    institution: 'PROJET DE L\'ÉCOLE',
      /*sous menu-institution*/
            presentation:'Projet de l\'école',
            school_project:'Projet de l\'école',
            educatif_project:'Projet éducatif', 
    school: 'VIE DE L\'ECOLE',
            /*sous menu-school*/
            cycle_school:'Cycles de formation',
                    nursly:'Maternelle',
                    primary:'Primaire',
            pedagogy:'Pédagogie',
            inscription_scolarity:'Inscription & scolarité',
            school_life:'Rythme scolaire',
                    rythme_scolaire:'Rythme scolaire',
                    association:'Association',
                    activites_extra_scolaires:'Activités extra scolaires',
            resultats_examens:'Résultats aux examens',
    admission: 'ADMISSION',
                    reglement_interieur:'Règlement intérieur',
    contact: 'CONTACT',   
     
    /************** FIN DE LA NAVBAR *****************/ 
      
      
      
      
      /************** DEBUT DU HOME SLIDE ****************/
        big_text_slide1:'RELIANCE EDUCATIVE',
        smallTextSlide1:'La compétence au service de l\'exellence',
      
        big_text_slide2:'Cours pratique',
        small_text_slide2:'d\'informatique...',
      
        big_text_slide3:'L\'enfant précoce',
        small_text_slide3:'Apprendre c\'est découvrir...', 
    /************** FIN DU HOME SLIDE ****************/ 
      
      
      
      
     /************** PAGE  ACCUEIL  ******************/
      presentation:'Présentation',
      complexe_scolaire_maj:'COMPLEXE SCOLAIRE BILINGUE',
      complexe_scolaire_minus:'complexe scolaire bilingue',
      
      initiation:'initiation théorique et pratique à l’informatique',
      reussite_epanouissement_mérite:'Réussite, épanouissement, mérite, écoute, font partie de nos maîtres-mots.',
      compose_le:'COMPOSEZ LE',
      pour_nous_joindre:'POUR NOUS JOINDRE',
      
      texte1:'Bienvenue au',
      texte2:'établissement d’enseignement privé, situé à Douala-Cameroun, dans l\'arrondissement de Douala 4ème (Bonabéri) par "Quatre étages" au lieu dit "Barrière Washington".',
      
      texte3:'Notre établissement est composé des cycles maternelle et primaire bilingues(Français/Anglais). Fondées en 2012, cet institution à été créée pour offrir un enseignement de qualité dans un cadre privilégié. Filles et garçons sont accueillis dans un cadre familial. Ils y apprennent en toute sérénité tout en s\'épanouissant.',
      
      texte4:'Dès leur entrée en primaire, les élèves profitent entre autres d\'une',
      texte5:'De nombreuses activités récréatives sont proposées permettant de créer un climat agréable et convivial, ainsi qu’un bon équilibre de vie.',
      
      texte6:'Des valeurs essentielles pour apprendre mieux et qui sont les clés de la réussite pour la poursuite des études. Au',
    texte7:'l’élève est au centre de notre pédagogie. Grâce à un suivi personnalisé, l\'élève est écouté, guidé, orienté et comprend mieux ses objectifs.',  
    
      texte8:'Si vous recherchez pour votre enfant un établissement privé d’enseignement où il pourra apprendre dans les meilleures conditions, dans la ville de Douala et notamment à Bonabéri, n\'hésitez pas à nous appeler au 675 68 67 26 / 697 80 50 36 / 677 32 28 71.',
      
      
      
      
      
      /************* DEBUT PAGE  RESULTAT AUX EXAMEN  ******************/
        cinq_premier:'Les Cinq prémiers de chaque classe pour la 5ème séquence',
        result_exam:'Résultats aux examens officiels',
      
        classes1:'SIL',
        classes2:'CP',
        classes3:'CE1',
        classes4:'CE2',
        classes5:'CM1',
        classes6:'CM2',
        
        rang:'Rang',
        nomPrenon:'Nom et Prénom',
      
        rang1:'1er',
        rang2:'2ème',
        rang3:'3ème',
        rang4:'4ème',
        rang5:'5ème',
      
        nos_laureats:'Nos lauréats aux examens officiels',
        admis_aux_exam:'Admis au',
      
        pourcentage:'Pourcentages de Réussite aux examens officiels',
      
      /************** FIN PAGE  RESULTAT AUX EXAMEN  ******************/
      
      
      
      
     /************** DEBUT PAGE  PROJET D'ECOLE  ******************/
      projet_ecole:'Projet de l\'école',
      
      projet_ecole_text1:'Les établissements scolaires camerounais sont soumis au respect des dispositions prévues par le code de l’éducation. Ils doivent élaborer un projet d’établissement qui définit les modalités particulières de mise en œuvre des objectifs et des programmes nationaux.',
      
      titre_projet_ecole_text2:'LES OBJECTIFS ET ENJEUX D’UN PROJET D’ECOLE',
      projet_ecole_text2_1:'Le projet de l\'école est un',
      projet_ecole_text2_2_gras:'instrument de pilotage',
      projet_ecole_text2_3:'dont l’ambition est d’aboutir à',
      projet_ecole_text2_4_gras:'davantage de cohérence :',
      projet_ecole_text2_5:'Cohérence à l’intérieur de l’établissement, entre les différents acteurs par une',
      projet_ecole_text2_6_gras:'démarche respectueuse de leur identité et de leurs valeurs .',
      projet_ecole_text2_7:'Cohérence entre l’établissement et son environnement, par',
      projet_ecole_text2_8_gras:'l’association à la conception de la politique de l’établissement', 
      projet_ecole_text2_9:'des familles, des élus, de l’institution.',
      projet_ecole_text2_10:'Cohérence aux niveaux national entre les établissements du réseau,',
      projet_ecole_text2_11_gras:'par la définition d’objectifs commun à tous,',
      projet_ecole_text2_12:'mais que chacun peut et doit poursuivre à sa manière, en innovant, en inventant.',
      
      titre_projet_ecole_text3:'LE CADRE INSTITUTIONNEL',
      projet_ecole_text3_1_gras:'Le projet de l\'école devra être reformulé pour s’inscrire dans le nouveau cadre du Plan d’Orientation Stratégique et de ses objectifs.',
      projet_ecole_text3_2:'L\’actuel projet présenté dans ce bulletin de rentrée tient compte :',
      projet_ecole_text3_3:'des objectifs et indicateurs de performance de la mission enseignement scolaire primaire et maternel',
      projet_ecole_text3_4:'du diagnostic de l\'école présenté à la mission.',
      projet_ecole_text3_5:'Il permet :',
      projet_ecole_text3_6:'D\’apporter sa contribution à la réalisation des objectifs du projet d’orientation stratégique de l\'enseignement de base,',
      projet_ecole_text3_7:'D’exprimer une volonté locale,',
      projet_ecole_text3_8:'De définir une stratégie,',
      projet_ecole_text3_9:'De donner une cohérence aux activités,',
      projet_ecole_text3_10:'D’exprimer les attentes, les espoirs et la volonté collective d’une communauté,',
      projet_ecole_text3_11:'De mettre à jour et de clarifier les valeurs partagées, et de produire une identité commune,',
      projet_ecole_text3_12:'De déboucher sur une définition d’objectifs et sur une stratégie stable ouverte sur l’environnement.',
      
      titre_projet_ecole_text4:'LES AXES DE PROGRES ET DE DEVELOPPEMENT DU PROJET DE l\'ÉCOLE',
      projet_ecole_text4_1:'Six axes de progrès au service du développement de l’école ont été définis et arrêtés par un groupe de pilotage et validés par le conseil de l\'école',
      projet_ecole_axe_1:'Axe n° 1',
      projet_ecole_axe_1_text1_gras:'Valoriser l’image de marque de l’établissement en améliorant son attractivité et tendre vers l’excellence.',
      projet_ecole_axe_1_text2:'Cet axe vise à :',
      projet_ecole_axe_1_text3:'Moderniser et adapter les conditions d’accueil des élèves et des familles,',
      projet_ecole_axe_1_text4:'Offrir aux élèves un enseignement d’excellence garantissant la réussite pour tous,',
      projet_ecole_axe_1_text5:'Structurer et rationnaliser l’offre de formation par la mise en place d’options diversifiées,',
      projet_ecole_axe_1_text6:'Encourager la participation des élèves de l’établissement à différents types de concours nationaux et/ou internationaux,',
      projet_ecole_axe_1_text7:'Développer et organiser des actions à vocations culturelles et sportives,',
      projet_ecole_axe_2:'Axe n° 2',
      projet_ecole_axe_2_text1_gras:'Conduire le maximum d’élèves au niveau des compétences attendues en fin de scolarité et à l’obtention des diplômes correspondants.',
      projet_ecole_axe_2_text2:'Cet axe vise à :',
      projet_ecole_axe_2_text3:'Prévenir les difficultés d’apprentissage et prendre en charge la difficulté scolaire,',
      projet_ecole_axe_2_text4:'Accompagner chaque élève dans l’acquisition du socle commun de compétences pour toute sa scolarité obligatoire,',
      projet_ecole_axe_2_text5:'Améliorer la maîtrise des sciences et des technologies,',
      projet_ecole_axe_2_text6:'Assurer la réussite de chaque élève grâce à la personnalisation des parcours,',
      projet_ecole_axe_2_text7:'Améliorer les taux de réussite au',
      projet_ecole_axe_2_text8_cep:'CEP et au concours d\'entrée en 6ème,',
      projet_ecole_axe_2_text10:'Préparer à l’enseignement secondaire, à l’autonomie et à la vie d’adulte,',
      projet_ecole_axe_3:'Axe n° 3',
      projet_ecole_axe_3_text1_gras:' Poursuivre et développer la politique des langues déjà engagée dans l’établissement de la maternelle au CM2.',
      projet_ecole_axe_3_text2:'Cet axe vise à :',
      projet_ecole_axe_3_text3:' Renforcer l’enseignement des langues et offrir à tous les élèves un parcours linguistique adapté,',
      projet_ecole_axe_3_text4:' Augmenter la proportion d’élèves en classe à dispositif de langue renforcée,',
      projet_ecole_axe_4:'Axe n° 4',
      projet_ecole_axe_4_text1_gras:' Développer les partenariats éducatifs et culturels pour permettre à l’établissement de rayonner et de s’ouvrir sur l\'ensemble du territoire national.',
      projet_ecole_axe_4_text2:'Cet axe vise à :',
      projet_ecole_axe_4_text3:'Consolider le partenariat et les échanges avec l’Institut du Cameroun,',
      projet_ecole_axe_4_text4:'Renforcer notre mission de coopération,',
      projet_ecole_axe_4_text5:'Favoriser les échanges et le développement de projets pédagogiques inter-établissements scolaires,',
      projet_ecole_axe_5:'Axe n° 5',
      projet_ecole_axe_5_text1_gras:' Améliorer les compétences professionnelles des personnels enseignants et non enseignants titulaires ou non titulaires (contrats locaux) par la mise en place d’actions de formation continue à l’interne, comme à l’externe.',
      projet_ecole_axe_5_text2:'Cet axe vise à :',
      projet_ecole_axe_5_text3:'Renforcer la formation continue,',
      projet_ecole_axe_5_text4:'Disposer d’un potentiel d’enseignants qualitativement adaptés,',
      projet_ecole_axe_5_text5:'Constituer et mettre à disposition une banque de ressources documentaires à vocation pédagogique,',
      
       projet_ecole_axe_6:'Axe n° 6',
      projet_ecole_axe_6_text1_gras:'Vie de l’élève',
      projet_ecole_axe_6_text2:'Cet axe vise à :',
      projet_ecole_axe_6_text3:'Faire respecter l’école et favoriser l’apprentissage de la responsabilité,',
      projet_ecole_axe_6_text4:'Contribuer à l’amélioration de la qualité de vie des élèves,',
      projet_ecole_axe_6_text5:'Améliorer le fonctionnement de la vie scolaire,',
      projet_ecole_axe_6_text6:'Assurer le suivi des élèves en collaboration avec le personnel enseignant, le directeur et les familles.',
      projet_ecole_axe_6_text7:'Assurer l’animation éducative et participer à l’apprentissage des pratiques citoyennes.',
     
      /************** FIN PAGE  PROJET D'ECOLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  MATERNELLE  ******************/
      maternelle:'Maternelle',
      maternelle_titre:'Ecole maternelle privée bilingue',
      
      maternelle_text1:'Il n\'est pas nécessaire d\'être bilingue pour intégrer l\'',
      maternelle_text2_gras:'école maternelle privée bilingue',
      maternelle_text3:'Il suffit d\'avoir envie de le devenir.',
      
      maternelle_text4:'Les enfants sont accueillis dès 2 ans en effectifs réduits (18 par classe env.).',
      maternelle_text5:'L’encadrement pédagogique comprend : une directrice, des enseignants bilingues de haut niveau, et des assistantes maternelles qualifiées.',
      maternelle_text6:'Surveillance et sécurité : les enseignants supervisent toutes les récréations, les repas des enfants pendant les récréations et la garderie.',
      
      maternelle_text2_1:'La Méthode de',
      maternelle_text2_2:'pour la maternelle',
      maternelle_text2_3:'Pratique quotidienne de l’anglais avec un professeur d\'anglais natif et des cahiers d’activité en anglais dès la Petite Section.',
      maternelle_text2_4:'Initiation dès la maternelle à la lecture et à l’écriture avec la méthode syllabique, garante d’une excellente orthographe.',
      maternelle_text2_5:'Notre objectif : favoriser les apprentissages précoces, la concentration et l’épanouissement de l’enfant.',
      maternelle_text2_6:'Grâce aux effectifs limités, les activités sont nombreuses : ',
      maternelle_text2_7:'- Activités orales : français, anglais, chant ',
      maternelle_text2_8:'- Activités de motricité : ateliers d’arts plastiques, éducation physique, cours d’expression corporelle ',
      maternelle_text2_9:'- Activités culturelles et ludiques : jeux éducatifs, découvertes sensorielles.',
      
      maternelle_journee_type:'Journée type',
      maternelle_journee_type1:'- Début de la journée à 8h pour respecter le rythme biologique de l’enfant (accueil possible dès 07h30) ',
      maternelle_journee_type2:'- Exercices d’application ludiques pour éveiller leur curiosité',
      maternelle_journee_type3:'- Sieste pour les petits',
      
      maternelle_horaire:'Horaires',
      maternelle_horaire1:'Accueil : à partir de 07h30 ',
      maternelle_horaire2:'Ecole :lundi, mardi, mercredi, jeudi et vendredi, de 08h00 à 12h30 ',
      maternelle_horaire3:'Déjeuner + récréation : de 10h00 à 10h30 ',
      maternelle_horaire4:'Garderie éducative :',
      maternelle_horaire5:'de 10h30 à 12h30',
      
       /************** FIN PAGE  MATERNELLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  PRIMAIRE  ******************/
        primaire:'Primaire',
        primaire_titre:'Le Complexe Primaire Bilingue',
      
        primaire_text1_gras:'Le Complexe Primaire Bilingue',
        primaire_text2:', propose en primaire un enseignement bilingue (Section francophone – Section anglophone) dans des classes à petits effectifs. Les méthodes classiques de l’école permettent aux élèves de s’épanouir et de poursuivre leur scolarité dans les meilleurs établissements, au Cameroun comme à l’étranger.',
        primaire_text3:'Il n\'est pas nécessaire d\'être bilingue pour intégrer l\'',
        primaire_text4:'école primaire privée bilingue',
        primaire_text5:'Il suffit d\'avoir envie de le devenir.',
        primaire_text6:'Un encadrement pédagogique important : un directeur, des enseignants bilingues de haut niveau, des assistantes d’éducation et des surveillants. ',
        primaire_text7:'Les enseignants supervisent toutes les récréations et les départs des enfants en fin de journée de classe. ',
      
        primaire_text2_1:'Retour aux fondamentaux',
        primaire_text2_2:'Transmettre le plaisir d’apprendre et la rigueur.',
        primaire_text2_3:'L’enseignement est dispensé dans le respect des programmes officiels de l’Education de Base au Cameroun et va très souvent au-delà.',
        primaire_text2_4:'Une utilisation de la méthode syllabique , qui garantit une excellente orthographe et une très bonne compréhension des textes',
        primaire_text2_5:'Une écoute et un accompagnement par des enseignants impliqués.',
        primaire_text2_6:'Des enfants épanouis et formés aux meilleures méthodes de travail.',
      
        primaire_journee_type:'Journée type dans notre école primaire privée',
        primaire_journee_type1:'Début de la journée à 7h30 pour respecter le rythme biologique de l’enfant (accueil possible jusqu\'a 07h15).',
        primaire_journee_type2:'Modules de travail d’une durée de 40 minutes environ correspondant à la capacité d’attention du jeune enfant.',
        primaire_journee_type3:'Exercices d’application et de répétition pour une bonne assimilation',
      
        primaire_horaire:'Horaires de l\'école primaire privée',
        primaire_horaire1:'Ecole : lundi, mardi, jeudi et vendredi, de 07h30 à 15h30;',
        primaire_horaire2:'mercredi',
        primaire_horaire3:'de 7h30 à 12h30.',
      
       /************** FIN PAGE  PRIMAIRE  ******************/
      
  });
  $translateProvider.preferredLanguage('fr');
});
