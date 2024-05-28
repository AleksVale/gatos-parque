import { AutocompleteService } from './autocomplete.service';
export declare class AutocompleteController {
    private readonly autocompleteService;
    constructor(autocompleteService: AutocompleteService);
    findAll(fields?: string): Promise<any>;
}
