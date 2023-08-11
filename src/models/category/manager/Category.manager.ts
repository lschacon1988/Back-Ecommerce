import CRUDManager from "../../../util/manager/ManagerCRUD";
import CategoryModels from "../Category.models";
import ICategory from "../interfaces/Category.interfaces";


export default class CategoryManager extends CRUDManager<ICategory> {
    private static instance: CategoryManager;

    private constructor() {
        super(CategoryModels);
    }

    public static getInstance(): CategoryManager {
        if (!CategoryManager.instance) {
            CategoryManager.instance = new CategoryManager();
        }
        return CategoryManager.instance;
    
    }
}

