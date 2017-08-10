class CareerPortalLaburnavController {
    constructor(configuration, $location, SearchService) {
        'ngInject';
        this.SearchService = SearchService;
        this.$location = $location;
        this.configuration = configuration;
    }
}

class CareerPortalLaburnav {
    constructor() {
        'ngInject';

        let directive = {
            restrict: 'E',
            templateUrl: 'app/laburnav/laburnav.html',
            scope: false,
            controller: CareerPortalLaburnavController,
            controllerAs: 'laburnav',
            bindToController: true,
            replace:true
        };
        return directive;
    }

}

export default CareerPortalLaburnav;