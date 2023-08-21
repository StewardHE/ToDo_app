// Requires
const {Router} = require("express")
const router = Router()
const { getToDo, saveToDo } = require("../controllers/ToDoController")

// Home Route
router.get('/', getToDo)

// Save Route
router.post('/save', saveToDo)


// Export to other files
module.exports = router;