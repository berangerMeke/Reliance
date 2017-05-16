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
    institution: 'Project of school',
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
            reglement_interieur:'Réglement intérieur',
            school_life:'Rythme scolaire',
                    rythme_scolaire:'Rythme scolaire',
                    association:'Association',
                    activites_extra_scolaires:'Activités extra scolaires',
            resultats_examens:'Résultats aux examens',
    admission: 'ADMISSION',
                    reglement_interieur:'Règlement intérieur',
    contact: 'CONTACT',
    
    /************** FIN DE LA NAVBAR ****************/   
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
  });
  $translateProvider.preferredLanguage('fr');
});
