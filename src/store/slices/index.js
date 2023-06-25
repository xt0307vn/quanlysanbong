import ManagerSlice, {
    createNewFootballPich,
    createNewPitch,
    deletePitch
} from "./ManagerSlice";
import AccountSlice, {
    updateIdAccount,
    updateTypeAccount,
} from "./AccountSlice";
import PageSlice,{updateCurrentPage, updatePreviousPage} from "./PageSlice";

const Slices = { ManagerSlice, AccountSlice, PageSlice };

export default Slices;
export {createNewFootballPich, createNewPitch, updateIdAccount, updateTypeAccount, updateCurrentPage, updatePreviousPage, deletePitch}