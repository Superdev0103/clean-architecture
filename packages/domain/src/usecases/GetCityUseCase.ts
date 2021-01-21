import {CityRepository} from "../ports/repositories/CityRepository";
import {GetCityRequest} from "../ports/request/GetCityRequest";
import {GetCityPresentation} from "../ports/presenters/GetCityPresentation";

export class GetCityUseCase {
    constructor(private readonly cityRepository: CityRepository) {

    }

    async execute(request: GetCityRequest, presenter: GetCityPresentation) {
        presenter.displayCity(await this.cityRepository.getCity(request.city))
    }

}
