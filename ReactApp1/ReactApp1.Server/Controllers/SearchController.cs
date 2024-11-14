using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SearchController : ControllerBase
{
    List<string> dummyData =
    [
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching",
        "Apple", "Samsung", "Toyota", "BMW"
    ];

    [HttpGet(Name = "results")]
    public IActionResult GetSearchResults([FromQuery] string searchText)
    {
        var results = dummyData.Where(x => x.Contains(searchText, StringComparison.OrdinalIgnoreCase)).ToList();

        return Ok(results);
    }
}
