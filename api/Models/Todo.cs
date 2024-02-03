
namespace api.Models;

public class Todo
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; }
    public string Severity { get; set; } = null!;
    public bool IsComplete { get; set; } = false;
}