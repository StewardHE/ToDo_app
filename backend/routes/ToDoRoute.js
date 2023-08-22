// Requires
const {Router} = require("express")
const router = Router()
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController")

// Home Route
router.get('/', getToDo)

// Save Route
router.post('/save', saveToDo)

// Update Route
router.post('/update', updateToDo)

// Delete route
router.post('/delete', deleteToDo)

// Export to other files
module.exports = router;