
$(document).ready(function(){
    $(".headerContent").html(
        '<div class="header-bg">'+
            '<div class="container">'+
                '<div class="header">'+
                    '<a href="#" class="logo"><img src="https://killian.beecr8tive.net/beta/unexsys/images/ati_logo_feb_2020.png"></a>'+
                    '<span class="header-titled2">UNIFIED EXTENTION SYSTEM PORTAL</span>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
    // menu section
    $(".headerContentMenu").html(
        '<div class="header-bg-menu">'+
            '<div class="container-xxl">'+
                '<div class="header-menu">'+
                    '<ul>'+
                        '<li><a href="home.html">Home</a></li>'+
                        '<li><a href="agency-profile.html">Agency Profile</a></li>'+
                        '<li><a href="directory.html">Directory</a></li>'+
                        '<li><a href="inventory.html">Inventory</a></li>'+
                        
                        '<div class="search-container">'+
                           '<form action="/action_page.php">'+
                                '<input type="text" placeholder="Search" name="search" class="search-content">'+
                            '</form>'+
                        '</div>'+
                    '</ul>'+
                '</div>'+
           '</div>'+
        '</div>'
    );
    // headerChangeMenu
    $(".headerChangeMenu").html(
        '<div class="header-bg-menu">'+
            '<div class="container-xxl">'+
                '<div class="header-menu">'+
                    '<ul>'+
                        '<li><a href="home.html">Home</a></li>'+
                        '<li><a href="org-profile.html">ORG PROFILE</a></li>'+
                        '<li><a href="directory.html">Directory</a></li>'+
                        '<li><a href="inventory.html">Inventory</a></li>'+
                        
                        '<div class="search-container">'+
                           '<form action="/action_page.php">'+
                                '<input type="text" placeholder="Search" name="search" class="search-content">'+
                            '</form>'+
                        '</div>'+
                    '</ul>'+
                '</div>'+
           '</div>'+
        '</div>'
    );
    // BreadCumb Section
    $(".headContentSubMenu").html(
    '<div class="container-xxl pt-3">'+
        '<nav aria-label="breadcrumb">'+
            '<ol class="breadcrumb">'+
              '<li class="breadcrumb-item">UNEXSYS ></li>'+
              '<li class="breadcrumb-item" >AFE RESOURCE INVENTORY ></li>'+
              '<li class="breadcrumb-item" >INVENTORY</li>'+
            '</ol>'+
        '</nav>'+
    '</div>');
});

// Activation class menu link
jQuery(function($) {
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('ul a').each(function() {
      if (this.href === path) {
        $(this).addClass('active-menu');
      }
    });
});


